import { createUserDocumentFromAuth, signInWithGooglePoup } from "../../util/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePoup();
    // console.log(response);
    createUserDocumentFromAuth(user);
  };
  
  return (
    <div>
      <h1 >Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};
export default SignIn;
