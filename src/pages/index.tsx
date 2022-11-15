import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolved) => setTimeout(resolved, 2000));
  };
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg={"gray.800"}
        p={8}
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            id="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input
            name="password"
            id="password"
            type="password"
            label="Password"
            {...register("password")}
            error={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme={"pink"}
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
