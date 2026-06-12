/**
 * Helper utilities for AD Equipamentos sales page.
 */

export function getWhatsAppUrl(message?: string): string {
  // Brazilian code: 55 + DDD: 85 + number: 94033053
  const cleanPhone = "558594033053";
  if (message) {
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${cleanPhone}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento!`;
}

// Curated high quality imagery that aligns with image_0.png and image_1.png
export const IMAGES = {
  // Beautiful modern high-end grocery aisle with warm lighting
  supermarketMain: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600",
  
  // Organized, well-lit refrigeration cabinets, black metal style
  refrigeration: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1000",
  
  // Luxury fresh vegetables & fruit section (matching image_0 fruit visual theme)
  fruitSection: "https://images.unsplash.com/photo-1610832958506-ee5633619144?auto=format&fit=crop&q=80&w=1000",
  
  // Modern retail design isometric / project layout
  storeLayout: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=1000",
  
  // Gourmet storefront / facade
  facade: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
};
