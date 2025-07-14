import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  structuredData?: object;
}

export default function SEOHead({
  title = "Pharma Compliance Experts - Leading Pharmaceutical Regulatory Consulting Services",
  description = "Expert pharmaceutical consulting services specializing in FDA compliance, GMP, quality management, regulatory filings, and pharmaceutical audits. Global regulatory excellence for pharmaceutical, biotechnology, and medical device companies.",
  keywords = "pharmaceutical consulting, FDA compliance, GMP consulting, regulatory compliance, pharmaceutical audits, quality management, regulatory filings, pharmaceutical industry, biotechnology consulting, medical device compliance",
  canonical = "https://www.pharmacomplianceexperts.com",
  ogImage = "https://www.pharmacomplianceexperts.com/og-image.jpg",
  twitterImage = "https://www.pharmacomplianceexperts.com/twitter-image.jpg",
  structuredData
}: SEOHeadProps) {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical);
    }
    
    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }
    
    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    let twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    let twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', canonical);
    }
    
    let twitterImageTag = document.querySelector('meta[property="twitter:image"]');
    if (twitterImageTag) {
      twitterImageTag.setAttribute('content', twitterImage);
    }
    
    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, keywords, canonical, ogImage, twitterImage, structuredData]);

  return null;
} 