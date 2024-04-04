import { loadFolders, loadTeams } from "@/api";
import { activeFolder, folderProps, teamProps } from "@/types/loadtype";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DrawerItems = () => {
  const [teamData, setTeamData] = useState<teamProps[]>([]);

  const [folderData, setFolderData] = useState<folderProps[]>([]);

  const [extendedFolder, setExtendedFolder] = useState<activeFolder | null>(
    activeFolder.PRODUCTS
  );

  useEffect(() => {
    const res = loadTeams();
    setTeamData(res);
    console.log("hey gbjhasjhd", res);

    const folderres = loadFolders();

    console.log("folders loaded::", folderres);
    setFolderData(folderres);
  }, []);

  return (
    <div className="mt-4 px-2 py-2">
      <nav className="flex flex-col gap-2 pb-2 mb-2  font-semibold">
        {teamData.map((sngl, indx) => {
          return (
            <div
              key={indx}
              className="flex justify-between items-center text-sm items-center pb-1 border-b-2"
            >
              <Link href={`${sngl.link}`}>
                <div className="flex gap-2 text-sm ">
                  <Image
                    src={sngl.icon}
                    alt="disscuss"
                    width={500}
                    height={500}
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <p className="text-xs">{sngl.name}</p>
                </div>
              </Link>
              <button className="text-xs border px-1 rounded border-slate-900 ">
                {sngl.about}
              </button>
            </div>
          );
        })}

        <div className="flex gap-2 text-slate-500 items-center pb-1  pt-2">
          <Image
            src="/add-square.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
            }}
          />
          <Link href={"/createTeam"}>
            <p>Create a team</p>
          </Link>
        </div>
      </nav>

      {/* ***********************Team Area Ended**************************** */}

      <div className="my-4 font-semibold text-slate-400 text-sm">
        <h4>FOLDERS</h4>
      </div>

      <nav
        className="flex flex-col gap-4 font-semibold"
        style={
          {
            // overflowY: "scroll",
            // position: "absolute",
            // top: "250px",
            // height: "160px",
          }
        }
      >
        {folderData.map((eachF, indx) => {
          return (
            <>
              <div
                key={indx}
                className="flex justify-between items-center text-sm items-center"
              >
                <div className="flex gap-2 text-sm">
                  <Image
                    src="/folder.svg"
                    alt="disscuss"
                    width={500}
                    height={500}
                    style={{
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <p className="text-xs">{eachF.name}</p>
                </div>
                {eachF.subExist ? (
                  extendedFolder == eachF.link ? (
                    <Image
                      src="/up.svg"
                      alt="upImgImg"
                      width={500}
                      height={500}
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                      onClick={() => setExtendedFolder(null)}
                    />
                  ) : (
                    <Image
                      src="/downsvgrepo.svg"
                      alt="downImg"
                      width={500}
                      height={500}
                      style={{
                        width: "12px",
                        height: "13px",
                      }}
                      onClick={() => setExtendedFolder(eachF.link)}
                    />
                  )
                ) : null}
              </div>
              {extendedFolder == eachF.link && (
                <div className=" flex flex-col  gap-1 border-l-2 ml-2 pl-4">
                  {eachF.subItems.map((evSub, i) => {
                    return (
                      <div
                        className=" hover:bg-zinc-200"
                        style={{
                          padding: "4px",
                        }}
                        key={i}
                      >
                        <Link href={`${evSub.link}`}>
                          <p>{evSub.name}</p>
                        </Link>
                      </div>
                    );
                  })}

                  <div
                    className="flex gap-2 text-slate-500 items-center pb-1  pt-2 "
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src="/add-circle.svg"
                      alt="disscuss"
                      width={500}
                      height={500}
                      style={{
                        width: "17px",
                        height: "17px",
                      }}
                    />
                    <Link href={"/createSub"}>
                      <p>Add New Sub</p>
                    </Link>
                  </div>
                </div>
              )}
            </>
          );
        })}

        {/* {folderData.map((eachF, indx) => {
          return (
            <div
              key={indx}
              className="flex justify-between items-center text-sm items-center"
            >
              <div className="flex gap-2 text-sm">
                <Image
                  src="/design.svg"
                  alt="disscuss"
                  width={500}
                  height={500}
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <p className="text-xs">Design Team</p>
              </div>
              <Image
                src="/down.svg"
                alt="downImg"
                width={500}
                height={500}
                style={{
                  width: "12px",
                  height: "12px",
                }}
              />
            </div>
          );
        })}
        <div className="flex justify-between items-center text-sm items-center">
          <div className="flex gap-2 text-sm">
            <Image
              src="/design.svg"
              alt="disscuss"
              width={500}
              height={500}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
            <p className="text-xs">Design Team</p>
          </div>
          <Image
            src="/down.svg"
            alt="downImg"
            width={500}
            height={500}
            style={{
              width: "12px",
              height: "12px",
            }}
          />
        </div>
        <div className="flex gap-2 text-xs items-center">
          <Image
            src="/discountmarketing.svg"
            alt="marketing"
            width={500}
            height={500}
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          <p>Marketing Team</p>
        </div>
        <div className="flex gap-2  items-center">
          <Image
            src="/coding.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "17px",
              height: "17px",
            }}
          />
          <p>Development Team</p>
        </div>

        <div className="flex gap-2 text-sm items-center">
          <Image
            src="/Market.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Market</p>
        </div>
        <div className="flex gap-2 text-sm items-center">
          <Image
            src="/sector.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Sector</p>
        </div>

        <div className="flex gap-2 text-sm items-center">
          <Image
            src="/Watchlist.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Watchlist</p>
        </div>
        <div className="flex gap-2 text-sm items-center">
          <Image
            src="/Events.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Events</p>
        </div>

        <div className="flex gap-2 text-sm items-center">
          <Image
            src="/Newspaper.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>News/Interview</p>
          </div>*/}
      </nav>
    </div>
  );
};

export default DrawerItems;
