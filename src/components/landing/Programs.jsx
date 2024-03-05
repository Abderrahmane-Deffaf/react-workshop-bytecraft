import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import english from "../../assets/landing/english.svg";
import hat from "../../assets/landing/hat.svg";
import student from "../../assets/landing/student.svg";
import teacher from "../../assets/landing/teacher.svg";

export default function Programs() {
  const data = [
    {
      icon: english,
      text: "english",
    },
    {
      icon: teacher,
      text: "english",
    },
    {
      icon: student,
      text: "english",
    },
    {
      icon: hat,
      text: "english",
    },
    {
      icon: english,
      text: "english",
    },
    {
      icon: student,
      text: "english",
    },
    {
      icon: hat,
      text: "english",
    },
    {
      icon: teacher,
      text: "english",
    },
  ];
  return (
    <div id="programms" className=" flex h-[20rem] justify-center w-full px-3 ">
      <Carousel
        opts={{
          align: "end",
        }}
        className="w-full max-w-[80%]"
      >
        <CarouselContent className=" ">
          {data.map((Element, index) => {
            return (
              <CarouselItem className=" basis-1/4" key={index}>
                <div className=" p-2 bg-green-300">
                  <img src={Element.icon} />
                  <p>{Element.text}</p>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
