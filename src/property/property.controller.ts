import { Controller, Get, Param, Query } from '@nestjs/common';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  async getProperty() {
    const property = await this.propertyService.getProperty();
    return property;
  }

  @Get(':propertyId')
  async getPropertyById(@Param('propertyId') propertyId: string): Promise<any> {
    const property = await this.propertyService.getPropertyById(propertyId);
    return property;
  }
}
