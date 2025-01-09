import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import mlimg from "../assets/ml.png";
import pythonimg from "../assets/python.png";
import reactimg from "../assets/reactjs.png";
import "./ProjectCard.css";
function ProjectCard() {
  return (
    <>
      <div className="rec_proj">
        <div className="container">
          <div className="row gap-3">
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7"
              style={{ backgroundColor: "white" }}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-black/60 uppercase font-bold">
                  Machine Learning
                </p>
                <h4 className="text-black/90 font-medium text-xl">Vanguard</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={mlimg}
                style={{ padding: "20px", border: "solid 1px grey" }}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Project Info</p>
                    <p className="text-tiny text-white/60">
                      Image Classification , Shortest Path
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Github
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7"
              style={{ backgroundColor: "white" }}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-black/60 uppercase font-bold">
                  Machine Learning
                </p>
                <h4 className="text-black/90 font-medium text-xl">
                  TaskVerify
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={pythonimg}
                style={{ padding: "20px", border: "solid 1px grey" }}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Project Info</p>
                    <p className="text-tiny text-white/60">
                      Image Classification , Shortest Path
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Github
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[300px] col-span-12 sm:col-span-7"
              style={{ backgroundColor: "white" }}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-black/60 uppercase font-bold">
                  Machine Learning
                </p>
                <h4 className="text-black/90 font-medium text-xl">Vanguard</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={reactimg}
                style={{ padding: "20px", border: "solid 1px grey" }}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Project Info</p>
                    <p className="text-tiny text-white/60">
                      Image Classification , Shortest Path
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Github
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectCard;
