import useQuery from "hooks/useQuery";

const useAuth = () => {
  const { sendQuery } = useQuery();

  const Register = ({ firstName, lastName, email, password }) =>
    sendQuery("auth/sign-up", {
      method: "POST",
      body: {
        firstName,
        lastName,
        email,
        password,
      },
    });

  const SignIn = ({ email, password }) =>
    sendQuery("auth/sign-in", {
      method: "POST",
      body: {
        email: email,
        password: password,
      },
    });

  const Logout = () =>
    sendQuery("auth/sign-out", {
      method: "POST",
    });

  return { Register, SignIn, Logout };
};

export default useAuth;
