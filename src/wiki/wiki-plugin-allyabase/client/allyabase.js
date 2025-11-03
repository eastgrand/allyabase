let allyabaseUser;

async function post(url, payload) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  });
};

function getPage($item) {
  return $item.parents('.page').data('data');
};

function getAllyabaseUser(item) {
  if(item.allyabaseUser) {
    return item.allyabaseUser;
  } else {
    return fetch('/plugin/allyabase/user').then(res => res.json());
  }
};

function addDeploymentControls($item, item) {
  const deploymentDiv = document.createElement('div');
  deploymentDiv.style.cssText = 'margin: 20px 0; padding: 15px; background: #f5f5f5; border-radius: 5px;';

  const title = document.createElement('h3');
  title.textContent = '🚀 Deployment Controls';
  deploymentDiv.appendChild(title);

  // Token input
  const tokenLabel = document.createElement('label');
  tokenLabel.textContent = 'Deployment Token: ';
  tokenLabel.style.cssText = 'display: block; margin: 10px 0 5px 0;';

  const tokenInput = document.createElement('input');
  tokenInput.type = 'password';
  tokenInput.id = 'deployment-token';
  tokenInput.placeholder = 'Enter deployment token';
  tokenInput.style.cssText = 'width: 100%; padding: 5px; margin-bottom: 10px;';

  tokenLabel.appendChild(tokenInput);
  deploymentDiv.appendChild(tokenLabel);

  // Deploy button
  const deployButton = document.createElement('button');
  deployButton.textContent = '🚀 Deploy All Services';
  deployButton.style.cssText = 'padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;';

  // Status button
  const statusButton = document.createElement('button');
  statusButton.textContent = '📊 Check Status';
  statusButton.style.cssText = 'padding: 10px 20px; background: #2196F3; color: white; border: none; border-radius: 5px; cursor: pointer;';

  // Output div
  const outputDiv = document.createElement('div');
  outputDiv.id = 'deployment-output';
  outputDiv.style.cssText = 'margin-top: 15px; padding: 10px; background: white; border: 1px solid #ddd; border-radius: 5px; font-family: monospace; font-size: 12px; max-height: 400px; overflow-y: auto; display: none;';

  // Deploy button handler
  deployButton.addEventListener('click', async () => {
    const token = tokenInput.value;
    if (!token) {
      alert('Please enter a deployment token');
      return;
    }

    deployButton.disabled = true;
    deployButton.textContent = '⏳ Deploying...';
    outputDiv.style.display = 'block';
    outputDiv.innerHTML = '<p>🚀 Starting deployment process...</p>';

    try {
      const response = await post('/plugin/allyabase/deploy', { token });
      const result = await response.json();

      if (result.success) {
        outputDiv.innerHTML = '<p style="color: green;">✅ Deployment completed successfully!</p>';
      } else {
        outputDiv.innerHTML = '<p style="color: orange;">⚠️ Deployment completed with some issues</p>';
      }

      // Show detailed results
      outputDiv.innerHTML += `<p><strong>Timestamp:</strong> ${result.timestamp}</p>`;

      for (const [service, serviceResult] of Object.entries(result.services)) {
        const color = serviceResult.errors.length > 0 ? 'red' : 'green';
        outputDiv.innerHTML += `
          <div style="margin: 10px 0; padding: 10px; border-left: 3px solid ${color};">
            <strong>${service}</strong><br/>
            Pulled: ${serviceResult.pulled ? '✅' : '❌'}<br/>
            Restarted: ${serviceResult.restarted ? '✅' : '❌'}<br/>
            ${serviceResult.errors.length > 0 ? `<span style="color: red;">Errors: ${serviceResult.errors.join(', ')}</span>` : ''}
          </div>
        `;
      }
    } catch (err) {
      outputDiv.innerHTML = `<p style="color: red;">❌ Deployment failed: ${err.message}</p>`;
    } finally {
      deployButton.disabled = false;
      deployButton.textContent = '🚀 Deploy All Services';
    }
  });

  // Status button handler
  statusButton.addEventListener('click', async () => {
    const token = tokenInput.value;
    if (!token) {
      alert('Please enter a deployment token');
      return;
    }

    statusButton.disabled = true;
    statusButton.textContent = '⏳ Checking...';
    outputDiv.style.display = 'block';
    outputDiv.innerHTML = '<p>📊 Checking service status...</p>';

    try {
      const response = await fetch(`/plugin/allyabase/deploy/status?token=${encodeURIComponent(token)}`);
      const result = await response.json();

      if (result.success) {
        outputDiv.innerHTML = '<p style="color: green;">✅ Status retrieved successfully!</p>';

        for (const [service, status] of Object.entries(result.services)) {
          outputDiv.innerHTML += `
            <div style="margin: 10px 0; padding: 10px; border-left: 3px solid #2196F3;">
              <strong>${service}</strong><br/>
              ${status.error ? `<span style="color: red;">Error: ${status.error}</span>` : `
                Commit: ${status.commit}<br/>
                Has Changes: ${status.hasChanges ? '⚠️ Yes' : '✅ No'}
              `}
            </div>
          `;
        }
      } else {
        outputDiv.innerHTML = `<p style="color: red;">❌ ${result.error}</p>`;
      }
    } catch (err) {
      outputDiv.innerHTML = `<p style="color: red;">❌ Failed to check status: ${err.message}</p>`;
    } finally {
      statusButton.disabled = false;
      statusButton.textContent = '📊 Check Status';
    }
  });

  deploymentDiv.appendChild(deployButton);
  deploymentDiv.appendChild(statusButton);
  deploymentDiv.appendChild(outputDiv);

  $item.append(deploymentDiv);
}

function emit($item, item) {
  $item.empty(item);

  const gettingUserDiv = document.createElement('div');
  gettingUserDiv.innerHTML = '<p>Getting your allyabase user, and signatures...</p>';
  $item.append(gettingUserDiv);
  let user;

  // Add deployment controls first (doesn't require user)
  addDeploymentControls($item, item);

  getAllyabaseUser(item)
    .then(_allyabaseUser => {
console.log('item is now', item);
      allyabaseUser = _allyabaseUser;

      addExplainer();
      addFeeds();
      addContracts();
      addInventory();
    })
    .catch(err => console.warn('received an error emitting in contract plugin', err))
    .finally(() => {
console.log('finally');
      bind($item, item);
    });
};

function bind($item, item) {
console.log('bind called');

console.log('listeners added');
};

if(window) {
  window.plugins['contract'] = {emit, bind};
}

export const contract = typeof window == 'undefined' ? { emit, bind } : undefined;
