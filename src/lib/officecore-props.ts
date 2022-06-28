import { ImageField, LinkField, Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type HeaderProps = {
    fields: {
        data: {
            item: {
                DarkLogo: {
                    jsonValue: ImageField
                }
                LightLogo: {
                    jsonValue: ImageField
                }
            }
            layout: {
                item: {
                    children: {
                        results: {
                            children: {
                                results: {
                                    pageTitle: Field<string>,
                                    url: {
                                        path: string
                                    }
                                }
                            }
                            pageTitle: Field<string>,
                            url: {
                                path: string
                            }
                        }
                    }
                    pageTitle: Field<string>,
                    url: {
                        path: string
                    }
                }
            }
        }
    }
}

export type RecentNewsProps = {
    fields: {
        data: {
            item: {
                pageTitle: {
                    jsonValue: Field<string>
                },
                Text: Field<string>,
                children: {
                    results: RecentNewsResults[]
                }
            }
        }
    }
}

export type RecentNewsResults = {
    pageTitle: {
        jsonValue: Field<string>
    },
    Intro: {
        jsonValue: Field<string>
    },
    Date: {
        jsonValue: string
    }
    Image: {
        jsonValue: ImageField
    },
    url: {
        path: string
    }
}

export type NewsOverviewProps = {
    fields: {
        items: NewsProps[]
    }
}

export type NewsProps = {
    fields: {
        pageTitle: Field<string>,
        Title: Field<string>,
        Intro: Field<string>,
        Text: Field<string>,
        Date: Field<string>,
        Image: {
            jsonValue: ImageField
        },
    }
    url: string
}

export type ClientProps = {
    fields: {
        data: {
            item: {
                Title: Field<string>,
                Text: Field<string>,
            },
            search: {
                results: {
                    Vertical: string,
                    Website: {
                        jsonValue: LinkField
                    }
                    Logo: {
                        value: ImageField
                    }
                }
            }
        }
    }
}

export type FooterProps = {
    fields: {
        Copyright: Field<string>,
        Logo: ImageField,
        Services: string,
        QuickLinks: string,
        Contact: Field<string>
    }
}

export type FormProps = {
    fields: {
        Image: ImageField,
        Title: Field<string>,
        Subtitle: Field<string>,
        FormLink: string
    }
}

export type VideoProps = {
    fields: {
        Title: Field<string>,
        Subtitle: Field<string>,
        WatchMoreLink: LinkField,
        VideoImage: ImageField,
        VideoId: string
    }
}

export type PageBannerProps = {
    fields: {
        Title: Field<string>,
        BannerImage: {
            value: {
                src: string
            }
        }
    }
}

export type PromoProps = {
    fields: {
        Title: Field<string>,
        Address: Field<string>
    }
}

/* TO REVIEW BELOW */

export type ListItemProps = {
    fields: {
        context: {
            Title: Field<string>,
            Text: Field<string>
        }
        items: NewsPage[]
    }
}

export type NewsPage = {
    url: string,
    fields: {
        Title: Field<string>,
        Image: ImageField,
        Intro: Field<string>,
        Content: Field<string>,
        pageTitle: Field<String>,
        Date: Field<string>
    }
}

export type ClientSliderProps = {
    fields: {
        context: {
            Title: Field<string>,
            Text: Field<string>
        }
        items: ClientItems[]
    }
}

export type ClientItems = {
    fields: {
        Website: LinkField,
        Logo: ImageField,
        TagName: string
    }
}


export type PageListerProps = {
    fields: {
        items: NewsPage[]
    }
}

export type ContentProps = {
    child: NewsPage
}

export type ContactDetailsProps = {
    fields: {
        Title: Field<string>,
        Address: Field<string>
        Email: Field<string>
    }
}

export type PageContentProps = {
    fields: {
        Image: ImageField,
        Title: Field<string>,
        Text: Field<string>,
        Intro: Field<string>,
        Date: Field<string>
    }
}

export type ImageListerProps = {
    fields: {
        items: ImageListerItem[]
    }
}

export type ImageListerItem = {
    url: string,
    fields: {
        Image: ImageField,
        Title: Field<string>,
    }
}

export type ProductsProps = {
    fields: {
        items: Page[]
    }
}

export type Page = {
    url: string,
    fields: {
        pageTitle: Field<string>,
        Title: Field<string>,
        Image: ImageField,
        Text: Field<string>
    }
}

export type BreadcrumbProps = {
    fields: {
        data: {
            item: {
                pageTitle: Field<string>,
                url: {
                    path: string
                },
                ancestors: Crumb[]
            }
        }
    }
}

export type Crumb = {
    pageTitle: Field<string>,
    url: {
        path: string
    }
}

export type SideMenuProps = {
    fields: {
        data: {
            item: {
                parent: {
                    children:
                    {
                        results: Crumb[]
                    }
                }
            }
        }
    }
}

export type ProductProps = {
    fields: {
        ProductDescription: Field<string>,
        Image: ImageField,
        Title: Field<string>,
        pageTitle: Field<string>,
        Text: Field<string>,
        ProductImage: {
            value: ImageField
        }
    }
}

export type ClientGalleryProps = {
    fields: {
        data: {
            tags: {
                children: {
                    results: Tag[]
                }
            },
            clients: {
                children: {
                    results: Client[]
                }
            }
        }
    }
}

export type Tag = {
    tagName: Field<string>,
    url: {
        path: string
    }
}

export type Client = {
    name: Field<string>,
    logo: {
        jsonValue: string
    },
    vertical: {
        value: string
    },
    website: LinkField,
    url: {
        path: string
    }
}

export type GamesGalleryProps = {
    fields: {
        data: {
            tags: {
                children: {
                    results: Tag[]
                }
            },
            games: {
                children: {
                    results: Product[]
                }
            }
        }
    }
}

export type Product = {
    title: Field<string>,
    text: Field<string>,
    image_a0a9ad0f492845108de46065a7c2d259: {
        jsonValue: string
    },
    pageTitle: Field<string>,
    productDescription: Field<string>,
    productFamily: {
        value: string
    },
    url: {
        path: string
    }
}