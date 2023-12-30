import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import {
  setArea,
  setBanner,
  setCity,
  setEmailID,
  setFlat,
  setLandmark,
  setLogo,
  setPinCode,
  setShopDescription,
  setShopName,
  setShopTags,
  setSocialMediaLink,
  setState,
} from "../../redux/features/shop";
import { setPhoneNumber } from "../../redux/features/user";
import { useEffect, useState } from "react";
import Product from "../../CommonComponets/Product";

export default function ShopScreen() {
  //State for handling UI
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  //State variables for storing details of shop
  const shopName = useSelector((e) => e.shop.shopName);
  const shopDescription = useSelector((e) => e.shop.shopDescription);
  const shopTags = useSelector((e) => e.shop.shopTags);
  const pincode = useSelector((e) => e.shop.pincode);
  const flat = useSelector((e) => e.shop.flat);
  const area = useSelector((e) => e.shop.area);
  const landmark = useSelector((e) => e.shop.landmark);
  const city = useSelector((e) => e.shop.city);
  const state = useSelector((e) => e.shop.state);
  const contactNumber = useSelector((e) => e.shop.contactNumber);
  const emailID = useSelector((e) => e.shop.emailID);
  const socialMediaLink = useSelector((e) => e.shop.socialMediaLink);
  const logo = useSelector((e) => e.shop.logo);
  const banner = useSelector((e) => e.shop.banner);

  //dispatch
  const dispatch = useDispatch();

  const getShopDetails = () => {
    //Fetch shop details of the shop from the shop name
    dispatch(setShopName("ABC's clothing"));
    dispatch(
      setShopDescription(
        "A clothing branch with good clothes at cheap affordable price in Chennai. We have clothes for men, women and children. Once clothing brand for every shop."
      )
    );
    dispatch(setShopTags("Clothing, Menswear, Kids wear"));
    const location = "12345,Flat 101,Main Street,Some Landmark".split(",");
    const [pincode, flat, area, landmark] = location;
    dispatch(setPinCode(pincode));
    dispatch(setFlat(flat));
    dispatch(setArea(area));
    dispatch(setLandmark(landmark));
    dispatch(setCity("Chennai"));
    dispatch(setState("Tamil Nadu"));
    dispatch(setPhoneNumber("9556875400"));
    dispatch(setEmailID("aswinraaj.ps@gmail.com"));
    dispatch(setSocialMediaLink("https://www.instagram.com/aswin.code"));
    dispatch(
      setLogo(
        "https://media.istockphoto.com/id/1428698181/vector/play-triangle-symbol-inside-3d-cube-elements-isometric-block-shapes-make-unity.jpg?s=612x612&w=0&k=20&c=-OlfdB7h2hNxWAT_COAExvkFeMcr4bm1Ix9WNRx4WBQ="
      )
    );
    dispatch(
      setBanner(
        "https://t4.ftcdn.net/jpg/05/70/59/93/360_F_570599394_TfPXxCqsP0OaiGKlIpyIGMK9JN1UqY9a.jpg"
      )
    );
  };

  //Function to toggle show less and show more in shop description
  const toggleShopDescriptionExpansion = () => {
    setIsDescriptionExpanded((p) => !p);
  };

  //Function to handle phone call
  const handlePhoneCall = () => {
    const phoneLink = `tel:${contactNumber}`;
    window.location.href = phoneLink;
  };

  //Function to redirect to social media of the shop
  const handleSocialMedia = () => {
    window.open(socialMediaLink, "_blank");
  };

  useEffect(() => {
    console.log("Fetching Data");
    getShopDetails();
  }, []);

  return (
    <div
      key="1"
      className="lg:grid flex flex-col min-h-screen  w-full lg:grid-cols-[320px_1fr] bg-blue-50 gap-0"
    >
      <div className="flex w-fit  flex-col items-start p-4 bg-light-blue-200 lg:block bg-blue-200 overflow-hidden">
        <div className="flex items-center">
          <img
            alt="shop banner"
            className="w-full h-32 object-cover rounded-lg"
            height="100"
            src={banner}
            style={{
              aspectRatio: "800/100",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
        <div className="flex h-20 items-center w-full gap-2">
          <img
            alt="shop logo"
            className="w-16 h-16 rounded-full"
            height="50"
            src={logo}
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="50"
          />
          <div>
            <h2 className="font-bold text-xl text-light-blue-700">
              {shopName}
            </h2>
          </div>
        </div>
        <div>
          <p>
            {isDescriptionExpanded
              ? shopDescription
              : shopDescription.substring(0, 50) + "..."}
          </p>{" "}
          <span
            onClick={() => toggleShopDescriptionExpansion()}
            className="text-gray-600 text-xs"
          >
            {isDescriptionExpanded ? "Show Less" : "Show More"}
          </span>
        </div>
        <hr className="border-2 my-2 rounded border-gray-500 w-full" />
        <div className="flex text-gray-700 gap-2">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              dataSlot="icon"
              className="w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p>
              {flat},{area}
            </p>
            <p>
              {landmark},{city}
            </p>
            <p>
              {state},{pincode}
            </p>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-4">
          <Button
            onClick={() => handlePhoneCall()}
            className=" text-black"
            variant="outline"
          >
            <PhoneIcon className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => handleSocialMedia()}
            className="text-black"
            variant="outline"
          >
            <FacebookIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center mt-4">
          <h1 className="font-semibold text-lg md:text-2xl text-light-blue-700">
            Products
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          {/* <Card className="bg-light-blue-50">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>
                      <h3 className="font-medium text-lg text-light-blue-700">Product 1</h3>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-sm text-light-blue-500">Shop Name</p>
                    </CardDescription>
                  </div>
                  <Button className="self-start text-light-blue-700" variant="outline">
                    View
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  alt="Product 1 image"
                  className="w-full h-64 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card>
            <Card className="bg-light-blue-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-light-blue-700">Product 2</CardTitle>
                <CardDescription className="text-light-blue-500">Product 2 Description</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Product 2 image"
                  className="w-full h-64 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card>
            <Card className="bg-light-blue-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-light-blue-700">Product 3</CardTitle>
                <CardDescription className="text-light-blue-500">Product 3 Description</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Product 3 image"
                  className="w-full h-64 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card>
            <Card className="bg-light-blue-50">
              <CardHeader className="pb-4">
                <CardTitle className="text-light-blue-700">Product 4</CardTitle>
                <CardDescription className="text-light-blue-500">Product 4 Description</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  alt="Product 4 image"
                  className="w-full h-64 object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardContent>
            </Card> */}
        </div>
      </main>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
