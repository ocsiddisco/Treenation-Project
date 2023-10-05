export interface AllProjects {
    id: number,
    name: string,
    location: string,
    description: string
}

export interface OneProjectAllTrees{
    id: number,
    name: string,
    life_time_CO2: string,
    price: string
}

export interface OneTree {
    id: number,
    name: string,
    life_time_CO2?: string,
    price?: string,
    family?: string,
    average_natural_life_span?: string,
    stock?: string,
    foliage_type?: FoliageType,
    origin_type?: OriginType,
    image?: string,
    particularities?: string,
    planter_likes?: string
}

// Sub-interface for foliage_type
export interface FoliageType {
    name?: string;
}

// Sub-interface for origin_type
export interface OriginType {
    name?: string;
}