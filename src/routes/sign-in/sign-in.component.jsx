import SignUpFrom from "../../components/sign-up-form/sign-up-form.components";
import {
  createUserDocumentFromAuth,
  signInWithGooglePoup,
} from "../../util/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePoup();
    createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUpFrom />
    </div>
  );
};
export default SignIn;
