import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Appointment {
  @Field()
  startAt: Date;

  @Field()
  endsAt: Date;
}
