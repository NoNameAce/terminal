export interface categoriesI {
    category_id: number,
    title_tj: string,
    title_ru: string,
    title_en: string,
    description_tj: string,
    description_ru: string,
    description_en: string,
    icon_id: string
}

export interface GosI {
    gos_id: number,
    gos_title: string
}

export interface ServicesI {
    service_id: number,
    service_category: number,
    service_gos: number,
    title_tj: string,
    title_ru: string,
    title_en: string,
    icon_id: string,
    applicant_type: object
    title: string
}