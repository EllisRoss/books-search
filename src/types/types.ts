export type IndustryIdentity = {
    type: string,
    identifier: string,
}

export type Book = {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: {
        title: string,
        authors: string[],
        publishedDate: string,
        description: string,
        industryIdentifiers: IndustryIdentity[],
        readingModes: {
            text: boolean,
            image: boolean
        },
        pageCount: number,
        printType: string,
        categories: string[],
        maturityRating: string,
        allowAnonLogging: boolean,
        contentVersion: string,
        language: string,
        previewLink: string,
        infoLink: string,
        canonicalVolumeLink: string
    },
    saleInfo: {
        country: string,
        saleability: string,
        isEbook: boolean
    },
    accessInfo: {
        country: string,
        viewability: string,
        embeddable: boolean,
        publicDomain: boolean,
        textToSpeechPermission: string,
        epub: {
            isAvailable: boolean
        },
        pdf: {
            isAvailable: boolean
        },
        webReaderLink: string,
        accessViewStatus: string,
        quoteSharingAllowed: boolean
    },
    searchInfo: {
        textSnippet: string
    }
}