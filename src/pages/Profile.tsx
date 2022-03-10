import { FormProvider, useForm } from "react-hook-form";
import { Center, Text, Button } from "@chakra-ui/react";

import useBuilderFields from "../features/builder/useBuilderFields";
import Field from "../app/components/Fields/Field";

function Profile() {
  const { fields } = useBuilderFields();
  const form = useForm();

  const onSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

  return (
    <FormProvider {...form}>
      <Center>
        <Text fontSize="3xl">Profile Page</Text>
      </Center>

      <form id="profile-form" onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map((f, i) => (
          <Field key={i} field={f} id={i} />
        ))}

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}

export default Profile;
