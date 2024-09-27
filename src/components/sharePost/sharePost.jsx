"use client";
import CustomButton from "../customButton/CustomButton";
import { useEffect, useState } from "react";

const SharePost = () => {
  const [availableNavigator, setAvailableNavigator] = useState(false);
  useEffect(() => {
    if (navigator.share) setAvailableNavigator(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {availableNavigator && (
        <div className="w-full bg-background min-h-64 text-onprimary p-8 flex flex-col items-center justify-center">
          <div className="max-w-4xl flex flex-col gap-4">
            <p className="text-2xl">Ti è piaciuto questo articolo?</p>
            <CustomButton onClick={handleShare}>Condividilo con chi vuoi!</CustomButton>
          </div>
        </div>
      )}
    </>
  );
};

export default SharePost;
