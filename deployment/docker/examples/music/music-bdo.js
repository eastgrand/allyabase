/**
 * Music BDO Example
 * Generates a BDO containing an embedded music player (Mirlo, Bandcamp, etc.)
 * that can be shared via emojicode in AdvanceKey/AdvanceShare
 */

export function generateMusicBDO({
  embedUrl,
  title = 'Untitled Track',
  artist = 'Unknown Artist',
  artworkUrl = '',
  width = 800,
  height = 400,
  backgroundColor = '#1a1a1a',
  textColor = '#ffffff'
}) {
  // Calculate dimensions
  const artworkSize = height - 40;
  const playerX = artworkUrl ? artworkSize + 20 : 20;
  const playerWidth = width - playerX - 20;

  // Escape XML special characters
  const escapeXml = (unsafe) => {
    if (!unsafe) return '';
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  };

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Dark background -->
  <rect width="${width}" height="${height}" fill="${backgroundColor}" rx="12"/>

  <!-- Track artwork (if provided) -->
  ${artworkUrl ? `
  <image href="${artworkUrl}" x="20" y="20" width="${artworkSize}" height="${artworkSize}" preserveAspectRatio="xMidYMid slice">
    <rect width="${artworkSize}" height="${artworkSize}" fill="#333" rx="8"/>
  </image>
  ` : ''}

  <!-- Track info -->
  <text x="${playerX}" y="40" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${textColor}">
    ${escapeXml(title)}
  </text>
  <text x="${playerX}" y="70" font-family="Arial, sans-serif" font-size="18" fill="#999">
    ${escapeXml(artist)}
  </text>

  <!-- Embedded music player using foreignObject -->
  <foreignObject x="${playerX}" y="90" width="${playerWidth}" height="${height - 110}">
    <div xmlns="http://www.w3.org/1999/xhtml" style="width: 100%; height: 100%;">
      <iframe
        src="${escapeXml(embedUrl)}"
        style="border: 0; width: 100%; height: 100%; border-radius: 8px;"
        allow="autoplay; fullscreen"
        allowfullscreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      ></iframe>
    </div>
  </foreignObject>

  <!-- Save button (bottom right) -->
  <g spell="save" spell-components='{"bdoPubKey":"","collection":"music"}'>
    <rect x="${width - 140}" y="${height - 50}" width="120" height="35" rx="8" fill="#8b5cf6" stroke="#6d28d9" stroke-width="2" cursor="pointer">
      <title>Save to Music Collection</title>
    </rect>
    <text x="${width - 80}" y="${height - 28}" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle" pointer-events="none">
      💾 Save
    </text>
  </g>

  <!-- Bottom bar with metadata -->
  <rect y="${height - 30}" width="${width}" height="30" fill="rgba(0,0,0,0.3)"/>
  <text x="${width / 2}" y="${height - 10}" font-family="Arial, sans-serif" font-size="12" fill="#666" text-anchor="middle">
    🎵 Shared via Planet Nine BDO Emojicode
  </text>
</svg>`;

  // Detect platform from URL
  let platform = 'unknown';
  if (embedUrl.includes('mirlo.space')) platform = 'mirlo';
  else if (embedUrl.includes('bandcamp.com')) platform = 'bandcamp';
  else if (embedUrl.includes('soundcloud.com')) platform = 'soundcloud';
  else if (embedUrl.includes('spotify.com')) platform = 'spotify';

  return {
    title: `Music: ${title}`,
    type: 'music-player',
    svgContent,
    metadata: {
      title,
      artist,
      embedUrl,
      artworkUrl,
      platform,
      createdAt: Date.now(),
      version: '1.0.0'
    },
    description: `${title} by ${artist} - Playable music via Planet Nine`
  };
}

/**
 * Helper for Mirlo tracks
 */
export function generateMirloBDO(trackId, title, artist, options = {}) {
  return generateMusicBDO({
    embedUrl: `https://mirlo.space/widget/track/${trackId}`,
    title,
    artist,
    ...options
  });
}

/**
 * Helper for Bandcamp tracks
 */
export function generateBandcampBDO(trackId, title, artist, options = {}) {
  return generateMusicBDO({
    embedUrl: `https://bandcamp.com/EmbeddedPlayer/track=${trackId}`,
    title,
    artist,
    ...options
  });
}

/**
 * Example music tracks for seeding
 */
export const exampleMusicTracks = [
  {
    embedUrl: 'https://mirlo.space/widget/track/12216',
    title: 'Digital Dreams',
    artist: 'The Synthesizers',
    artworkUrl: 'https://via.placeholder.com/300x300/667eea/ffffff?text=Digital+Dreams',
    width: 800,
    height: 400
  },
  {
    embedUrl: 'https://mirlo.space/widget/track/12216', // Using same as example
    title: 'Night Drive',
    artist: 'Retro Wave Collective',
    artworkUrl: 'https://via.placeholder.com/300x300/f093fb/ffffff?text=Night+Drive',
    width: 800,
    height: 400
  },
  {
    embedUrl: 'https://mirlo.space/widget/track/12216', // Using same as example
    title: 'Coffee Shop Jazz',
    artist: 'Smooth Trio',
    artworkUrl: 'https://via.placeholder.com/300x300/4facfe/ffffff?text=Coffee+Shop',
    width: 800,
    height: 400
  }
];
