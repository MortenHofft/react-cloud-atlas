En velkomstside med nyheder taget fra enten statisk markdown eller et rss feed.
en menu med indhold fra markdown.
en occurrence search side
en dataset side (optional)
en publisher side (optional)

config: {
    showDataset: bool
    showPublishers: bool
    newsRss: url (optional)
    registryIndex: (optional?)
    homepageConfig: title, description, images, newsrollBool
    footerConfig: contact, ...
    occurrenceConfig: {esIndex, ...}
    languages: []
    defaultLanguage
    translationSources,
    menu,
    lunrIndex: url or data
}