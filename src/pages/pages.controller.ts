import { Controller, Get, Query, Redirect } from '@nestjs/common';

const baseUrl = 'https://spartacus-training.eastus.cloudapp.azure.com:8443/occ/v2/powertools-spa/cms/pages';

@Controller('pages')
export class PagesController {
  @Get()
  @Redirect('https://spartacus-training.eastus.cloudapp.azure.com:8443/occ/v2/powertools-spa/cms/pages', 302)
  getPages(@Query() query) {
    if (query.pageType === 'ProductPage') {
      query.code = '3755219'; // map product code to some constant code
    }
    const queryStr = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
    return { url: `${baseUrl}?${queryStr}` };
  }

}
