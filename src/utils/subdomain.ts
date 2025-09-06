export const isJotwellSubdomain = (): boolean => {
  const hostname = window.location.hostname;
  
  // Check if hostname starts with 'jotwell.'
  if (hostname.startsWith('jotwell.')) {
    return true;
  }
  
  // For local development testing with query parameter
  if (process.env.NODE_ENV === 'development') {
    const params = new URLSearchParams(window.location.search);
    return params.get('subdomain') === 'jotwell';
  }
  
  return false;
};

export const isTkyoSubdomain = (): boolean => {
  const hostname = window.location.hostname;
  
  // Check if hostname starts with 'tkyo.'
  if (hostname.startsWith('tkyo.')) {
    return true;
  }
  
  // For local development testing with query parameter
  if (process.env.NODE_ENV === 'development') {
    const params = new URLSearchParams(window.location.search);
    return params.get('subdomain') === 'tkyo';
  }
  
  return false;
};

export const isDocketeerSubdomain = (): boolean => {
  const hostname = window.location.hostname;
  
  // Check if hostname starts with 'docketeer.'
  if (hostname.startsWith('docketeer.')) {
    return true;
  }
  
  // For local development testing with query parameter
  if (process.env.NODE_ENV === 'development') {
    const params = new URLSearchParams(window.location.search);
    return params.get('subdomain') === 'docketeer';
  }
  
  return false;
};

export const getSubdomain = (): string | null => {
  const hostname = window.location.hostname;
  
  // Handle localhost/development
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    // Check URL params for subdomain testing
    const params = new URLSearchParams(window.location.search);
    return params.get('subdomain');
  }
  
  // Check for subdomain in production
  const parts = hostname.split('.');
  
  // Must have at least subdomain.domain.tld
  if (parts.length >= 3) {
    return parts[0];
  }
  
  return null;
};