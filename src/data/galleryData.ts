const allGalleryModules = import.meta.glob<string>(
  '../assets/gallery/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

export const getGalleryImages = (category: string) => {
  const images = Object.entries(allGalleryModules)
    .filter(([path]) => path.includes(`/gallery/${category}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, url], index) => {
      // Extract the filename without extension to use as a clean title
      // e.g. "Event 1.jpg" -> "Event 1"
      const filename = path.split('/').pop() || '';
      const cleanTitle = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ');
      
      return {
        id: index + 1,
        type: 'image',
        src: url,
        thumbnail: url, 
        title: cleanTitle,
        description: `Photo from our ${category} gallery`
      };
    });
    
  return images;
};
