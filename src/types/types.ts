export type IndustryIdentity = {
    type: string,
    identifier: string,
}

export type BookVolumeInfo = {
    title: string,
    authors: [
        string
    ],
    publisher: string,
    publishedDate: string,
    description:  string,
    industryIdentifiers: IndustryIdentity[],
    readingModes: {
        text: boolean,
        image: boolean,
    },
    pageCount: number,
    printedPageCount: number,
    printType: string,
    categories: string[],
    maturityRating: string,
    allowAnonLogging: boolean,
    contentVersion: string,
    panelizationSummary: {
        containsEpubBubbles: boolean,
        containsImageBubbles: boolean
    },
    imageLinks?: {
        smallThumbnail?: string,
        thumbnail?: string,
        small?: string,
        medium?: string,
        large?: string,
        extraLarge?: string,
    },
    language: string,
    previewLink: string,
    infoLink: string,
    canonicalVolumeLink: string,
};

export type Book = {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: BookVolumeInfo,
    saleInfo: {
        country: string,
        saleability: string,
        isEbook: boolean,
        listPrice: {
            amount: number,
            currencyCode: string
        },
        retailPrice: {
            amount: number,
            currencyCode: string
        },
        buyLink: string,
        offers: [
            {
                finskyOfferType: number,
                listPrice: {
                    amountInMicros: number,
                    currencyCode: string
                },
                retailPrice: {
                    amountInMicros: number,
                    currencyCode: string
                }
            }
        ]
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
            isAvailable: boolean,
            acsTokenLink?: string
        },
        webReaderLink: string,
        accessViewStatus: string,
        quoteSharingAllowed: boolean
    },
    searchInfo: {
        textSnippet: string,
    }
}

export type Categories = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';
export type SortingBy = 'relevance' | 'newest';

export type Filter = {
    query: string,
    category: Categories,
    sortBy: SortingBy,
}