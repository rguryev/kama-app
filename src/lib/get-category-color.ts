const categoryColorMap = new Map();

categoryColorMap.set("Product Reviews", "text-orange-400");
categoryColorMap.set("Opinions", "text-green-400");
categoryColorMap.set("Travel Guides", "text-blue-400");

const getCategoryColor = (category: any) => {
  return categoryColorMap.get(category);
};

export default getCategoryColor;
