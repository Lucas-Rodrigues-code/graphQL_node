import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment";

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async hello() {
    return "Hello, world!";
  }
  @Mutation(() => String)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {}
}
