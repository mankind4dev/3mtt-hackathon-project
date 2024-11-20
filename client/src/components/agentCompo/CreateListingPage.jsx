import React, { useState } from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Home from "./layoutAgent";
import CreateHeadingPage from "./CreateHeadingPage";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CreateListingPage = () => {
  const { currentUser, loading, error } = useSelector((state) => state.users);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleListingUpdate = async (listingId) => {
    try {
    } catch (error) {}
  };
  return (
    <>
      <Home>
        <Navbar />
        <CreateHeadingPage />
        <Box>
          kjhdgsfdkj
          <p className="text-red-700 mt-5">
            {showListingsError ? "Error showing listings" : ""}
          </p>
          {userListings && userListings.length > 0 && (
            <div className="flex flex-col gap-4">
              <h1 className="text-center mt-7 text-3xl font-semibold">
                Your Listings
              </h1>
              {userListings.map((listing) => (
                <div
                  key={listing._id}
                  className="border rounded-lg flex gap-4 p-3 justify-between items-center"
                >
                  <Link to={`/listing/${listing._id}`}>
                    <img
                      src={listing.imageUrls[0]}
                      alt="listing cover"
                      className="h-16 w-16 object-contain rounded-lg"
                    />
                  </Link>
                  <Link
                    to={`/listing/${listing._id}`}
                    className="text-slate-700 font-semibold flex-1 hover:underline truncate"
                  >
                    <p>{listing.name}</p>
                  </Link>
                  <div className="flex flex-col item-center gap-4">
                    <button
                      onClick={() => handleListingDelete(listing._id)}
                      className="text-red-700 uppercase"
                    >
                      <MdDelete />
                    </button>
                    <Link to={`/update-listing/${listing._id}`}>
                      <button
                        onClick={() => handleListingUpdate(listing._id)}
                        className="text-green-700 uppercase"
                      >
                        <MdEdit />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Box>
      </Home>
    </>
  );
};

export default CreateListingPage;
