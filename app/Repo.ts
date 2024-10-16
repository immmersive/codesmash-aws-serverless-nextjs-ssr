export class Repo
{
    getAllowedForwardedHosts() : string
    {
        return process.env.HOSTING_API as string;
    }

    getAllowedOrigins() : string
    {
        return process.env.CLOUDFRONT as string;
    }

    getCloudFrontUrl() : string
    {
        return 'https://' + process.env.CLOUDFRONT as string;
    }

    getCloudFrontApiUrl() : string
    {
        return ('https://' + process.env.CLOUDFRONT + '/api') as string;
    }

    getApiUrl() : string
    {
        return process.env.API as string;
    }

    getImageUrl(image: string) : string
    {
        const assetUrl = this.getCloudFrontUrl() + '/_next/static/'; 
 
        return process.env.NODE_ENV === 'production' ? assetUrl + image : image;
    }
}
