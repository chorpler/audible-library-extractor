
export default {
  // States that persist by reading and writing to localStorage
  sticky: {
    lightSwitch: 1,
    lightSwitchSetByUser: false,
    // sortValues: false,
    viewMode: 'grid',
    chunkLocation: 0,
    booksInSeriesToggle: false,
    collectionsDrawerToggle: true,
    exportSettingsGallery: null,
    exportSettingsCSVdataSources: null,
    exportSettingsCSVcompatibility: null,
    booksInSeriesAll: false,
    booksInSeriesFinished: true,
    booksInSeriesOpenInApp: true,
    subPageSource: 'library',
    bookDetailsCollapsedCover: false,
    bookDetailsCollapsedDetails: false,
    contextMenuReminder: true,
    bookDetailSettings: {
      minHeight: null,
      titleShort: true,
      sidebar: {
        show: true,
        iconToolbar: true,
        seriesList: true,
        collectionsList: true,
      },
      carousel: true,
      playButton: true,
      cloudPlayer: false,
      blurb: true,
      statusIndicators: true,
      whispersync: true,
      plusCatalog: true,
      favorite: true,
      finished: true,
      reverseDirection: false,
      hideFirstSection: false,
    },
    collectionsHidePremade: false,
    player: {
      books: [
        // { asin: x, progress: 0 },
      ],
    },
  },
  // States that don't persist
  bookDetailSettingsOpen: false,
  searchMounted: false,
  searchCollection: [],
  mutatingCollection: [],
  collectionSource: null,
  pageCollection: null,
  route: null,
  routeParams: null,
  library: null,
  urlOrigin: null,
  searchQuery: "",
  standalone: null,
  displayMode: null,
  listRenderingOpts: null,
  windowWidth: window.innerWidth,
  showBackground: false,
  audioPlayerVisible: false,
  chunkCollection: [],
  chunkDistance: 40,
  refreshView: new Date().getTime(),
  pageTitle: null,
  pageSubTitle: null,
  version: null,
  extractSettings: null,
  siteOnline: true,
  searchOptCloseGuard: false,
  bundlingGallery: false,
  bookDetails: {
    book: null,
    index: -1,
  },
  searchOptOpenHeight: null,
  devMode: _.get( process.env, 'NODE_ENV' ) !== 'production',
  lazyScroll: true,
  navHistory: {
    btnNavigation: false,
    forward: [],
    back: [],
  },
  modal: {
    saveLocally: false,
  },
  blockScrolling: false,
  playingAudio: false,
  topNavOffset: 0,
  bookClicked: false,
};
