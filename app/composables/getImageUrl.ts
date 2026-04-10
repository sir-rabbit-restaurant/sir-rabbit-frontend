const DEFAULT_IMAGE_SOURCE = "";
const FALLBACK_DIRECTUS_URL = "https://api.sir-rabbit.ru";

export const getImageUrl = (
  id: string | undefined,
  params: { quality?: number } = { quality: 10 },
): string => {
  if (!id || id === undefined) {
    return DEFAULT_IMAGE_SOURCE;
  }
  const config = useRuntimeConfig();
  return `${config.public.directus.url || FALLBACK_DIRECTUS_URL}/assets/${id}?quality=${params.quality}`;
};
