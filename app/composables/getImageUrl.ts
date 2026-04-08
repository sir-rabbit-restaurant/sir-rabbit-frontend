const DEFAULT_IMAGE_SOURCE = "";
export const getImageUrl = (id: string | undefined,params:{quality?: number}={quality: 10}): string => {
  if (!id || id === undefined) {
    return DEFAULT_IMAGE_SOURCE;
  }
  const config = useRuntimeConfig();
  return `${config.public.directus.url}/assets/${id}?quality=${params.quality}`;
};
