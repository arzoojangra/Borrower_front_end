import React, { useContext, useEffect, useState } from "react";
import { Icons } from "../../icons/Icons";
import { UserContext } from "../../contextAPI/UserContext";
import { ApiCall } from "../../functions/ApiCall";
import AddBorrowerMoney from "../../modals/AddBorrowerMoney";
import TransferBorrowerMoneyModal from "../../modals/TransferBorrowerMoneyModal";

function Wallet({ uid, loanStatus }) {
  const [wallet, setWallet] = useState();
  const [openedModal, setOpenedModal] = useState(false);
  const { token } = useContext(UserContext);

  console.log(loanStatus);

  useEffect(() => {
    fetchData(uid);
  }, [openedModal]);

  const fetchData = async (uid) => {
    const config = {
      method: "get",
      url: `http://localhost:4000/api/v1/getBorrowerWallet/${uid}`,
      headers: { "Content-Type": "application/json", auhthorization: token },
    };

    try {
      const response = await ApiCall(config);

      if (response.status === 201) {
        console.log(response?.data?.data);
        setWallet(response?.data?.data);
        setOpenedModal(false);
      } else {
        alert("Something went Wrong");
      }
    } catch (error) {
      console.log("Something Went wrong");
    }
  };

  return (
    <div className="dashboard-card-border">
      <div className="row m-5">
        <div className="col-12">
          <h4>Wallet</h4>
          <hr className="mt-2 mb-1" />
          {loanStatus > "1400" ? (
            <div className="row m-5 justify-content-center">
              <div className="card wallet-user-div pb-5 shadow justify-content-center align-items-center ">
                <div className=""></div>
                <p className="wallet-holder-name mt-3">
                  {/* Hello! Ankuj */}
                  Your Wallet
                </p>
              </div>
              <div className="card col-9 wallet-div shadow mb-4 bg-body-tertiary rounded animated slideInDown">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-5">{Icons.wallet}</div>
                  <div className="col-md-6">
                    <p className="mb-0">Your Balance</p>
                    <h1 className="mt-0">&#8377; {wallet?.wallet_balance}</h1>
                  </div>
                </div>
              </div>

              <div className="row mt-2 justify-content-center">
                <div className="col-5">
                  <button
                    className="btn ms-3 btn-primary py-sm-3 px-sm-5 rounded-pill animated slideInLeft"
                    data-bs-toggle="modal"
                    data-bs-target="#addBorrowerMoney"
                  >
                    Deposit Money
                  </button>
                </div>

                <div className="col-5">
                  <button
                    className="btn ms-4 btn-primary py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                    data-bs-toggle="modal"
                    data-bs-target="#transferMoney"
                  >
                    Transfer Money
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="calculator-msg">
              You're Application is under process.
            </p>
          )}
        </div>
      </div>
      <TransferBorrowerMoneyModal
        wallet={wallet}
        setOpenedModal={setOpenedModal}
      />
      <AddBorrowerMoney wallet={wallet} setOpenedModal={setOpenedModal} />
    </div>
  );
}

export default Wallet;
