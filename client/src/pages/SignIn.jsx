import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { MdLogin } from "react-icons/md"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ImgLogin from "../assets/Authentication-rafiki.svg"
import LoaderSvg from "../components/LoaderSvg"

export default function SingIn() {
  const [LoaderSubmit, setLoaderSubmit] = useState(false)
  const LoaderSub = LoaderSubmit && <LoaderSvg />

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  })

  const onSubmit = async (data) => {
    console.log(data)
    setLoaderSubmit(true)
    setTimeout(() => {
      axios
        .post("http://localhost:8080/api/signin", data)
        .then((res) => {
          console.log(res.data)
          toast.success("Inscription réussie", {
            position: "top-center",
          })
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-center",
          })
        })
        .finally(() => {
          setLoaderSubmit(false)
        })
    }, 2000)
  }

  return (
    <div className="h-screen w-full bg-black">
      <div className="absolute top-5 left-5 text-white">
        <h1 className="text-3xl font-medium">ChatApp</h1>
        <div className="w-10 h-1 bg-white rounded-lg"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-7 ">
          <div className="h-screen relative flex flex-col justify-center p-5 items-center text-white col-span-2 md:col-span-3 lg:col-span-2">
            <div className="absolute top-7 right-5 group">
              <Link
                to="/"
                className="text-white text-xl flex justify-center items-center gap-3">
                <MdLogin />
                <span>Connexion</span>
              </Link>
              <div className="w-10 group-hover:w-full transition-all h-0.5 bg-white rounded-lg"></div>
            </div>
            <div className="">
              <h1 className="text-2xl">
                Bienvenue! Connectez-vous pour accéder à votre compte.
              </h1>
            </div>
            <div className="mt-3 w-full">
              <div className="mb-3 w-full">
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  {...register("username", {
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]{4,}$/,
                      message:
                        "Le nom d'utilisateur doit contenir au minimum 4 caractères et ne peut contenir que des lettres, des chiffres, des tirets, des underscores et des points.",
                    },
                  })}
                  className="w-full p-2 outline-none rounded-md text-white bg-transparent ring-2 focus:border-slate-400 transition-all border-blue-950"
                />
                {errors.username && (
                  <p className="text-red-400 font-semibold">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="mb-3 w-full">
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message:
                        "L'email doit respecter le format suivant : exemple@domaine.com",
                    },
                  })}
                  className="w-full p-2 outline-none rounded-md text-white bg-transparent ring-2 focus:border-slate-400 transition-all border-blue-950"
                />
                {errors.email && (
                  <p className="text-red-400 font-semibold">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-3 w-full">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  {...register("motDePasse", {
                    required: "Ce champ est requis",
                    minLength: {
                      value: 8,
                      message:
                        "Le mot de passe doit contenir au moins 8 caractères",
                    },
                    maxLength: {
                      value: 30,
                      message:
                        "Le mot de passe doit contenir au maximum 30 caractères",
                    },
                  })}
                  className="w-full p-2 outline-none rounded-md text-white bg-transparent ring-2 focus:border-slate-400 transition-all border-blue-950"
                />
                {errors.motDePasse && (
                  <div className="flex flex-col">
                    <p className="text-red-400 font-semibold">
                      {errors.motDePasse.message}
                    </p>
                    <p className="">
                      <Link
                        to="/forgot-password"
                        className="text-blue-500/90 hover:underline">
                        Mot de passe oublié ?
                      </Link>
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full p-2 flex justify-center items-center gap-3 font-semibold text-xl outline-none rounded-md text-white bg-blue-950 ring-2 ring-blue-950">
                  {LoaderSub}
                  Connexion
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-4 lg:col-span-5 bg-blue-950 h-screen w-full">
            <img src={ImgLogin} alt="" className="h-full w-full" />
          </div>
        </div>
      </form>
    </div>
  )
}
