// Production bfcache optimization utilities - optimized for server components
export const bfcacheOptimizations = {
  // Initialize bfcache optimizations - simplified for server components
  init: () => {
    if (typeof window === 'undefined') return;
    
    // Only run optimizations in production
    if (process.env.NODE_ENV !== 'production') return;
    
    // Lightweight event listeners for server-rendered content
    window.addEventListener('pagehide', bfcacheOptimizations.handlePageHide);
    window.addEventListener('pageshow', bfcacheOptimizations.handlePageShow);
  },
  
  // Handle page hide event for bfcache
  handlePageHide: (event: PageTransitionEvent) => {
    if (event.persisted) {
      console.log('Page entering bfcache');
      // Cleanup any client-side timers
      const highestTimeoutId = setTimeout(() => {}, 0);
      for (let i = 0; i < Number(highestTimeoutId); i++) {
        clearTimeout(i);
      }
    }
  },
  
  // Handle page show event for bfcache
  handlePageShow: (event: PageTransitionEvent) => {
    if (event.persisted) {
      console.log('Page restored from bfcache');
      
      // Trigger refresh for client components only
      const event = new CustomEvent('bfcache-restore');
      window.dispatchEvent(event);
    }
  },
  
  // Check if page is eligible for bfcache
  checkBfcacheEligibility: () => {
    if (typeof window === 'undefined') return;
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation?.type === 'back_forward') {
      console.log('Restored from bfcache');
    }
  }
};

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  bfcacheOptimizations.init();
  window.addEventListener('load', bfcacheOptimizations.checkBfcacheEligibility);
}
