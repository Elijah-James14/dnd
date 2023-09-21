import { useEffect, useRef, useState } from "react";
import { Card, Center, Image, Input, SimpleGrid } from "@chakra-ui/react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      tag: "mercedes",
      url: "https://images.pexels.com/photos/10890912/pexels-photo-10890912.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      tag: "mercedes",
      url: "https://images.pexels.com/photos/14496623/pexels-photo-14496623.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      tag: "mercedes",
      url: "https://images.pexels.com/photos/10358234/pexels-photo-10358234.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      tag: "lamborghini",
      url: "https://images.pexels.com/photos/17832661/pexels-photo-17832661/free-photo-of-lamborghini-huracan.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      tag: "ferrari",
      url: "https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      tag: "ferrari",
      url: "https://images.pexels.com/photos/9622534/pexels-photo-9622534.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 7,
      tag: "ferrari",
      url: "https://images.pexels.com/photos/15062315/pexels-photo-15062315/free-photo-of-ferrari-on-street.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 8,
      tag: "audi",
      url: "https://images.pexels.com/photos/17156936/pexels-photo-17156936/free-photo-of-audi-rs5.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 9,
      tag: "bmw",
      url: "https://images.pexels.com/photos/14533602/pexels-photo-14533602.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 10,
      tag: "porsche",
      url: "https://images.pexels.com/photos/12484845/pexels-photo-12484845.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 11,
      tag: "lamborghini",
      url: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 12,
      tag: "porsche",
      url: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  const SortablePhotos = ({ photo }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: photo.id });
    const style = { transition, transform: CSS.Transform.toString(transform) };
    return (
      <Card ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <Image src={photo.url} objectFit={"cover"} />
      </Card>
    );
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setPhotos((photos) => {
      const oldIndex = photos.findIndex((photo) => photo.id === active.id);
      const newIndex = photos.findIndex((photo) => photo.id === over.id);
      return arrayMove(photos, oldIndex, newIndex);
    });
  };
  let inputSearch = useRef(null);
  const [searchCar, setSearchCar] = useState("");

  useEffect(() => {
    inputSearch.current.focus();
  });
  return (
    <>
      <Center>
        <Input
          ref={inputSearch}
          placeholder="Enter car type (eg. 'mercedes')"
          width="300px"
          marginTop={"20px"}
          onChange={(e) => setSearchCar(e.target.value)}
        />
      </Center>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"15px"}
        spacing={"10px"}
      >
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={photos} strategy={rectSwappingStrategy}>
            {photos
              .filter((photo) => {
                if (searchCar === "") {
                  return photo;
                } else if (photo.tag.includes(searchCar.toLowerCase())) {
                  return photo;
                }
              })
              .map((photo) => (
                <SortablePhotos key={photo.id} photo={photo} />
              ))}
          </SortableContext>
        </DndContext>
      </SimpleGrid>
    </>
  );
};

export default PhotoGallery;
