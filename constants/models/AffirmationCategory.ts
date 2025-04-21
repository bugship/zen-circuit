/**
 * AffirmationCategory.ts — animated-enigma
 * @author bugship
 */

export interface AffirmationCategory {
  title: string;
  data: GalleryPreviewData[];
}

export interface GalleryPreviewData {
  id: number;
  text: string;
  image: any;
}
