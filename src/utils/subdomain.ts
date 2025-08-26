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