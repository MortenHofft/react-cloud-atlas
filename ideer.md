En velkomstside med nyheder taget fra enten statisk markdown eller et rss feed.
en menu med indhold fra markdown.
en occurrence search side
en dataset side (optional)
en publisher side (optional)

Special pages? Contact? People? Sponsors? FAQ? Terms of use?
Cookie notice.
Customizable frontpage with block types. See https://nbnatlas.org/ for inspiration on what could be intersting.
breakdowns. news. 
image header link. 
Featured species/occurrences. 

translated documentation on how to use the occurrence search

icon use? if they have their own for logos, partners, data types etc. plain images in markdown?

Table of content options?

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

each markdown item has a title, an image and content, a short description and a type, language
type equals the location: news/sdf-sdf-dfg root: /[title] 
    must be not null and different from occurrenceTitle, datasetTitle, publisherTitle, searchContentTitle

Markdown files are places in folders of your choice, names as you like. file name up to first 'dot' is the url title.
There is a primary language. Files are expected to exist in the primary language. This is also the fallback.
compiled files are located in one folder with unique names and decorated with language and url-title.

second step iterates all files and generates a config of where to find what files and creates a menu structure.

menu: [
    {
        name: about
    },
    {
        name: occurrences [crowdin translationKey],
        url: occurrences [from config]
    }
]

Start simpelt i forhold til content
en forside configuration og en about side er alt der er f.eks. Måske bare starte med at antage at config'en kan bygges. Det er jeg ikke i tvivl om at det kan. Og så se hvad der bliver behov for hvornår.