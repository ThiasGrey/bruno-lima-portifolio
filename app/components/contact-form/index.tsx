"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTittle } from "../section-tittle";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { handleSubmit, register, reset, formState: {
    isSubmitting
  } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try{
      await axios.post('/api/contact', data);
      reset();
      toast.success('Mensagem enviada com sucesso!');
      
    }catch(err){
      toast.error(`Ocorreu um erro ao enviar a mensagem!${err}}`);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className=" w-full max-w-[420px] mx-auto">
        <SectionTittle
          subtittle="contato"
          title="Vamos trabalhar juntos?"
          className="items-center text-center"
        />

        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 p-4 bg-gray-800 rounded-lg placeholder:text-gray-400 placeholder:text-sm text-gray-50 focus:outline-none focus:ring-2 ring-cyan-600"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 p-4 bg-gray-800 rounded-lg placeholder:text-gray-400 placeholder:text-sm text-gray-50 focus:outline-none focus:ring-2 ring-cyan-600"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-138 p-4 bg-gray-800 rounded-lg placeholder:text-gray-400 placeholder:text-sm text-gray-50 focus:outline-none focus:ring-2 ring-cyan-600"
            maxLength={500}
            {...register("message")}
          />
          <div className="mx-auto mt-6">
          <Button className="shadow-button" disabled={isSubmitting}>
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
          </div>
          
        </motion.form>
      </div>
    </section>
  );
};
