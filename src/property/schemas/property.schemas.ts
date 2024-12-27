import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { User } from '../../users/schemas/users.schemas';

@Schema({ timestamps: true })
export class Property {
  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  owner: User;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  type: string;

  @Prop({ type: String })
  description: string;

  @Prop({
    type: Object,
    required: true,
  })
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };

  @Prop({ type: Number, required: true })
  beds: number;

  @Prop({ type: Number, required: true })
  baths: number;

  @Prop({ type: Number, required: true })
  square_feet: number;

  @Prop({ type: [] })
  amenities: string[];

  @Prop({ type: Object })
  rates: {
    nigthly: Number;
    weekly: Number;
    monthly: Number;
  };

  @Prop({ type: Object })
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };

  @Prop({ type: Array })
  images: string[];

  @Prop({ type: Boolean, default: false })
  is_featured: Boolean;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
