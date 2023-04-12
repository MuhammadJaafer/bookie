import {
  switchToLogin,
  switchToResetPassword,
  switchToSignup,
} from "@/redux/features/AuthModal/AuthModalSlice";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import UI from "../../../../styles/UI.module.scss";
import styles from "../../../../styles/AuthModal.module.scss";
import { useDispatch } from "react-redux";
import { error } from "console";
import { FiAlertCircle } from "react-icons/fi";
import Select from "./Select";
import { auth, firestore } from "@/firebase/config";
import { spawn } from "child_process";
import { doc, setDoc } from "firebase/firestore";
type SignupProps = {};
const countryList = [
  { label: "Afghanistan", value: "afghanistan" },
  { label: "Albania", value: "albania" },
  { label: "Algeria", value: "algeria" },
  { label: "Andorra", value: "andorra" },
  { label: "Angola", value: "angola" },
  { label: "Antigua and Barbuda", value: "antigua_and_barbuda" },
  { label: "Argentina", value: "argentina" },
  { label: "Armenia", value: "armenia" },
  { label: "Australia", value: "australia" },
  { label: "Austria", value: "austria" },
  { label: "Azerbaijan", value: "azerbaijan" },
  { label: "Bahamas", value: "bahamas" },
  { label: "Bahrain", value: "bahrain" },
  { label: "Bangladesh", value: "bangladesh" },
  { label: "Barbados", value: "barbados" },
  { label: "Belarus", value: "belarus" },
  { label: "Belgium", value: "belgium" },
  { label: "Belize", value: "belize" },
  { label: "Benin", value: "benin" },
  { label: "Bhutan", value: "bhutan" },
  { label: "Bolivia", value: "bolivia" },
  { label: "Bosnia and Herzegovina", value: "bosnia_and_herzegovina" },
  { label: "Botswana", value: "botswana" },
  { label: "Brazil", value: "brazil" },
  { label: "Brunei", value: "brunei" },
  { label: "Bulgaria", value: "bulgaria" },
  { label: "Burkina Faso", value: "burkina_faso" },
  { label: "Burundi", value: "burundi" },
  { label: "Cabo Verde", value: "cabo_verde" },
  { label: "Cambodia", value: "cambodia" },
  { label: "Cameroon", value: "cameroon" },
  { label: "Canada", value: "canada" },
  { label: "Central African Republic", value: "central_african_republic" },
  { label: "Chad", value: "chad" },
  { label: "Chile", value: "chile" },
  { label: "China", value: "china" },
  { label: "Colombia", value: "colombia" },
  { label: "Comoros", value: "comoros" },
  { label: "Costa Rica", value: "costa_rica" },
  { label: "Croatia", value: "croatia" },
  { label: "Cuba", value: "cuba" },
  { label: "Cyprus", value: "cyprus" },
  { label: "Czech Republic", value: "czech_republic" },
  { label: "Denmark", value: "denmark" },
  { label: "Djibouti", value: "djibouti" },
  { label: "Dominica", value: "dominica" },
  { label: "Dominican Republic", value: "dominican_republic" },
  { label: "Ecuador", value: "ecuador" },
  { label: "Egypt", value: "egypt" },
  { label: "El Salvador", value: "el_salvador" },
  { label: "Equatorial Guinea", value: "equatorial_guinea" },
  { label: "Eritrea", value: "eritrea" },
  { label: "Estonia", value: "estonia" },
  { label: "Eswatini", value: "eswatini" },
  { label: "Ethiopia", value: "ethiopia" },
  { label: "Fiji", value: "fiji" },
  { label: "Finland", value: "finland" },
  { label: "France", value: "france" },
  { label: "Gabon", value: "gabon" },
  { label: "Gambia", value: "gambia" },
  { label: "Georgia", value: "georgia" },
  { label: "Germany", value: "germany" },
  { label: "Ghana", value: "ghana" },
  { label: "Greece", value: "greece" },
  { label: "Grenada", value: "grenada" },
  { label: "Guatemala", value: "guatemala" },
  { label: "Guinea", value: "guinea" },
  { label: "Guinea-Bissau", value: "guinea_bissau" },
  { label: "Guyana", value: "guyana" },
  { label: "Haiti", value: "haiti" },
  { label: "Honduras", value: "honduras" },
  { label: "Hungary", value: "hungary" },
  { label: "Iceland", value: "iceland" },
  { label: "India", value: "india" },
  { label: "Indonesia", value: "indonesia" },
  { label: "Iran", value: "iran" },
  { label: "Iraq", value: "iraq" },
  { label: "Ireland", value: "ireland" },
  { label: "Israel", value: "israel" },
  { label: "Italy", value: "italy" },
  { label: "Jamaica", value: "jamaica" },
  { label: "Japan", value: "japan" },
  { label: "Jordan", value: "jordan" },
  { label: "Kazakhstan", value: "kazakhstan" },
  { label: "Kenya", value: "kenya" },
  { label: "Kiribati", value: "kiribati" },
  { label: "Kosovo", value: "kosovo" },
  { label: "Kuwait", value: "kuwait" },
  { label: "Kyrgyzstan", value: "kyrgyzstan" },
  { label: "Laos", value: "laos" },
  { label: "Latvia", value: "latvia" },
  { label: "Lebanon", value: "lebanon" },
  { label: "Lesotho", value: "lesotho" },
  { label: "Liberia", value: "liberia" },
  { label: "Libya", value: "libya" },
  { label: "Liechtenstein", value: "liechtenstein" },
  { label: "Lithuania", value: "lithuania" },
  { label: "Luxembourg", value: "luxembourg" },
  { label: "Madagascar", value: "madagascar" },
  { label: "Malawi", value: "malawi" },
  { label: "Malaysia", value: "malaysia" },
  { label: "Maldives", value: "maldives" },
  { label: "Mali", value: "mali" },
  { label: "Malta", value: "malta" },
  { label: "Marshall Islands", value: "marshall_islands" },
  { label: "Mauritania", value: "mauritania" },
  { label: "Mauritius", value: "mauritius" },
  { label: "Mexico", value: "mexico" },
  { label: "Micronesia", value: "micronesia" },
  { label: "Moldova", value: "moldova" },
  { label: "Monaco", value: "monaco" },
  { label: "Mongolia", value: "mongolia" },
  { label: "Montenegro", value: "montenegro" },
  { label: "Morocco", value: "morocco" },
  { label: "Mozambique", value: "mozambique" },
  { label: "Myanmar", value: "myanmar" },
  { label: "Namibia", value: "namibia" },
  { label: "Nauru", value: "nauru" },
  { label: "Nepal", value: "nepal" },
  { label: "Netherlands", value: "netherlands" },
  { label: "New Zealand", value: "new_zealand" },
  { label: "Nicaragua", value: "nicaragua" },
  { label: "Niger", value: "niger" },
  { label: "Nigeria", value: "nigeria" },
  { label: "North Korea", value: "north_korea" },
  { label: "North Macedonia", value: "north_macedonia" },
  { label: "Norway", value: "norway" },
  { label: "Oman", value: "oman" },
  { label: "Pakistan", value: "pakistan" },
  { label: "Palau", value: "palau" },
  { label: "Panama", value: "panama" },
  { label: "Papua New Guinea", value: "papua_new_guinea" },
  { label: "Paraguay", value: "paraguay" },
  { label: "Peru", value: "peru" },
  { label: "Philippines", value: "philippines" },
  { label: "Poland", value: "poland" },
  { label: "Portugal", value: "portugal" },
  { label: "Qatar", value: "qatar" },
  { label: "Romania", value: "romania" },
  { label: "Russia", value: "russia" },
  { label: "Rwanda", value: "rwanda" },
  { label: "Saint Kitts and Nevis", value: "saint_kitts_and_nevis" },
  { label: "Saint Lucia", value: "saint_lucia" },
  {
    label: "Saint Vincent and the Grenadines",
    value: "saint_vincent_and_the_grenadines",
  },
  { label: "Samoa", value: "samoa" },
  { label: "San Marino", value: "san_marino" },
  { label: "Sao Tome and Principe", value: "sao_tome_and_principe" },
  { label: "Saudi Arabia", value: "saudi_arabia" },
  { label: "Senegal", value: "senegal" },
  { label: "Serbia", value: "serbia" },
  { label: "Seychelles", value: "seychelles" },
  { label: "Sierra Leone", value: "sierra_leone" },
  { label: "Singapore", value: "singapore" },
  { label: "Slovakia", value: "slovakia" },
  { label: "Slovenia", value: "slovenia" },
  { label: "Solomon Islands", value: "solomon_islands" },
  { label: "Somalia", value: "somalia" },
  { label: "South Africa", value: "south_africa" },
  { label: "South Korea", value: "south_korea" },
  { label: "South Sudan", value: "south_sudan" },
  { label: "Spain", value: "spain" },
  { label: "Sri Lanka", value: "sri_lanka" },
  { label: "Sudan", value: "sudan" },
  { label: "Suriname", value: "suriname" },
  { label: "Sweden", value: "sweden" },
  { label: "Switzerland", value: "switzerland" },
  { label: "Syria", value: "syria" },
  { label: "Taiwan", value: "taiwan" },
  { label: "Tajikistan", value: "tajikistan" },
  { label: "Tanzania", value: "tanzania" },
  { label: "Thailand", value: "thailand" },
  { label: "Timor-Leste", value: "timor_leste" },
  { label: "Togo", value: "togo" },
  { label: "Tonga", value: "tonga" },
  { label: "Trinidad and Tobago", value: "trinidad_and_tobago" },
  { label: "Tunisia", value: "tunisia" },
  { label: "Turkey", value: "turkey" },
  { label: "Turkmenistan", value: "turkmenistan" },
  { label: "Tuvalu", value: "tuvalu" },
  { label: "Uganda", value: "uganda" },
  { label: "Ukraine", value: "ukraine" },
  { label: "United Arab Emirates", value: "united_arab_emirates" },
  { label: "United Kingdom", value: "united_kingdom" },
  { label: "United States of America", value: "united_states_of_america" },
  { label: "Uruguay", value: "uruguay" },
  { label: "Uzbekistan", value: "uzbekistan" },
  { label: "Vanuatu", value: "vanuatu" },
  { label: "Vatican City (Holy See)", value: "vatican_city_holy_see" },
  { label: "Venezuela", value: "venezuela" },
  { label: "Vietnam", value: "vietnam" },
  { label: "Yemen", value: "yemen" },
  { label: "Zambia", value: "zambia" },
  { label: "Zimbabwe", value: "zimbabwe" },
];
const Signup: React.FC<SignupProps> = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [TogglePassword, setTogglePassword] = useState(false);
  const [ToggleConfirm, setToggleConfirm] = useState(false);
  const [country, setCountry] = useState(countryList[0]);
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    if (password != confirm) {
      setFormError("Passwords don't match");
      return;
    }
    if (password.length < 8) {
      setFormError("Password too short, it should be at least 8 characters");
      return;
    }
    try {
      //create new user
      const UserCredential = await createUserWithEmailAndPassword(
        email,
        password
      );
      if (error) {
        setFormError(error?.message!);
        return;
      }
      console.log(UserCredential?.user.uid);

      // add user properties
      const userDocRef = doc(firestore, "users", UserCredential?.user.uid!);
      setDoc(userDocRef, {
        ...JSON.parse(JSON.stringify(UserCredential?.user)),
        country: country.value,
        firstName,
        lastName,
      });
    } catch (err: any) {
      setFormError(err?.message!);
    }
  };
  return (
    <form
      className={`${styles.modal_right_form}`}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className={`${styles.modal_right_form_name}`}>
        <label className={`${styles.modal_right_form_label}`}>
          First Name
          <input
            className={`${styles.modal_right_form_input} ${styles.modal_right_form_input2}`}
            type="text"
            name="first_name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
        </label>
        <label className={`${styles.modal_right_form_label}`}>
          Last Name
          <input
            className={`${styles.modal_right_form_input} ${styles.modal_right_form_input2} `}
            type="text"
            name="last_name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
        </label>
      </div>
      <label className={`${styles.modal_right_form_label}`}>
        Email
        <input
          className={`${styles.modal_right_form_input}`}
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </label>

      <label className={`${styles.modal_right_form_label}`}>
        Password
        <div className={`${styles.modal_right_form_PasswordContainer}`}>
          <input
            className={`${styles.modal_right_form_input}`}
            type={TogglePassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <div
            onClick={() => {
              setTogglePassword((prev) => !prev);
            }}
            className={`${styles.modal_right_form_TogglePassword}`}
          >
            {TogglePassword ? <RxEyeOpen /> : <RxEyeClosed />}
          </div>
        </div>
      </label>
      <label className={`${styles.modal_right_form_label}`}>
        Confirm Password
        <div className={`${styles.modal_right_form_PasswordContainer}`}>
          <input
            className={`${styles.modal_right_form_input}`}
            type={ToggleConfirm ? "text" : "password"}
            name="confirm_password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
            required
          />
          <div
            onClick={() => {
              setToggleConfirm((prev) => !prev);
            }}
            className={`${styles.modal_right_form_TogglePassword}`}
          >
            {ToggleConfirm ? <RxEyeOpen /> : <RxEyeClosed />}
          </div>
        </div>
      </label>
      <Select value={country} setValue={setCountry} options={countryList} />
      {/* form Error */}
      {formError && (
        <div className={`${styles.modal_right_form_error}`}>
          <FiAlertCircle /> {formError}
        </div>
      )}

      <div className={`${styles.modal_right_form_buttonContainer}`}>
        <button className={`${UI.authBtn}`}>Sign up</button>
        {loading && <span>Loading...</span>}
        <div className={`${UI.blackText}`}>
          Already have an account?{" "}
          <span
            onClick={() => {
              dispatch(switchToLogin());
            }}
            className={`${UI.secondaryText} ${styles.modal_right_form_buttonContainer_signup}`}
          >
            Sign in
          </span>
        </div>
      </div>
    </form>
  );
};
export default Signup;
