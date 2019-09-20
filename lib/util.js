export const PropsForType = {
  homeHero: {
    logo: false,
    downArrow: true,
    upArrow: false,
    inspect: false,
    text: false,
    close: false,
    scrollCopy: true
  },
  portfolioItem: {
    logo: true,
    downArrow: true,
    upArrow: true,
    inspect: true,
    text: true,
    close: false,
    scrollCopy: false
  },
  informational: {
    logo: true,
    downArrow: true,
    upArrow: true,
    inspect: false,
    text: false,
    close: false,
    scrollCopy: false
  },
  projectDetail: {
    logo: true,
    downArrow: false,
    upArrow: false,
    inspect: false,
    close: true,
    scrollCopy: false
  },
  fin: {
    logo: true,
    downArrow: false,
    upArrow: true,
    inspect: false,
    close: false,
    scrollCopy: false
  },
  null: {
    inspect: false,
    text: false,
    close: false
  }
}

export const processSanityPortfolioItem = rawItem => {
  const {images, videos, title, year, featured} = rawItem;
  const media = (images || []).concat(videos || []).map(item => ({
    src: item.imageMono,
    activeSrc: item.imageColor,
    videoSrc: item.videoMono,
    activeVideoSrc: item.videoColor,
    id: item._key
  }));
  return {
    title,
    year,
    featured,
    media
  }
}