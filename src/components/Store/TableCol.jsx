import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import '../../styles.css';
import { useEffect, useState, useMemo } from 'react';
import cookie from "../../images/Cookie_transparent.png";
import Particle from '../Particle';

function TableCol({ counter, setCounter, countAmount, setAmount, ratePerSec, setRate }) {

    const initialStateProd1 = () => Number(window.localStorage.getItem('prod_1')) || 1;
    const initialStatePriceIncr1 = () => Number(window.localStorage.getItem('PriceIncr1')) || 500;



    //perhaps implement a count amount


    let numID = 0;
    const multiplierCount = [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0
    ];







    const Mult_0 = () => Number(window.localStorage.getItem('mult0')) || multiplierCount[0];
    const Mult_1 = () => Number(window.localStorage.getItem('mult1')) || multiplierCount[1];
    const Mult_2 = () => Number(window.localStorage.getItem('mult2')) || multiplierCount[2];
    const Mult_3 = () => Number(window.localStorage.getItem('mult3')) || multiplierCount[3];
    const Mult_4 = () => Number(window.localStorage.getItem('mult4')) || multiplierCount[4];
    const Mult_5 = () => Number(window.localStorage.getItem('mult5')) || multiplierCount[5];
    const Mult_6 = () => Number(window.localStorage.getItem('mult6')) || multiplierCount[6];
    const Mult_7 = () => Number(window.localStorage.getItem('mult7')) || multiplierCount[7];
    const Mult_8 = () => Number(window.localStorage.getItem('mult8')) || multiplierCount[8];
    const Mult_9 = () => Number(window.localStorage.getItem('mult9')) || multiplierCount[9];
    const Mult_10 = () => Number(window.localStorage.getItem('mult10')) || multiplierCount[10];
    const Mult_11 = () => Number(window.localStorage.getItem('mult11')) || multiplierCount[11];
    const Mult_12 = () => Number(window.localStorage.getItem('mult12')) || multiplierCount[12];
    const Mult_13 = () => Number(window.localStorage.getItem('mult13')) || multiplierCount[13];
    const Mult_14 = () => Number(window.localStorage.getItem('mult14')) || multiplierCount[14];
    const Mult_15 = () => Number(window.localStorage.getItem('mult15')) || multiplierCount[15];
    const Mult_16 = () => Number(window.localStorage.getItem('mult16')) || multiplierCount[16];
    const Mult_17 = () => Number(window.localStorage.getItem('mult17')) || multiplierCount[17];
    const Mult_18 = () => Number(window.localStorage.getItem('mult18')) || multiplierCount[18];
    const Mult_19 = () => Number(window.localStorage.getItem('mult19')) || multiplierCount[19];
    const Mult_20 = () => Number(window.localStorage.getItem('mult20')) || multiplierCount[20];
    const Mult_21 = () => Number(window.localStorage.getItem('mult21')) || multiplierCount[21];
    const Mult_22 = () => Number(window.localStorage.getItem('mult22')) || multiplierCount[22];
    const Mult_23 = () => Number(window.localStorage.getItem('mult23')) || multiplierCount[23];
    const Mult_24 = () => Number(window.localStorage.getItem('mult24')) || multiplierCount[24];
    const Mult_25 = () => Number(window.localStorage.getItem('mult25')) || multiplierCount[25];
    const Mult_26 = () => Number(window.localStorage.getItem('mult26')) || multiplierCount[26];


    const statePlaces = [
        "Building C",
        "Chandler-Ullmann Hall",
        "Christmas-Saucon Hall",
        "Coppee Hall",
        "Coxe Hall",
        "Drown Hall",
        "EWFM Computing Center",
        "FML",
        "Fritz Lab",
        "Gipson (Saucon Village)",
        "Grace Hall",
        "Iacocca Hall",
        "imbt Labs",
        "Lewis Lab",
        "Linderman Library",
        "Maginnes Hall",
        "Mohler Lab",
        "Neville Hall",
        "Packard Lab",
        "Rauch Business Center",
        "Seeley G. Mudd Building",
        "Sinclair Lab",
        "STEPS Building",
        "University Center",
        "Whitaker Lab",
        "Wilbur Powerhouse",
        "Zoellner Arts Center"
    ];

    const statePrices1 = [
        10,
        100,
        1100,
        22400,
        140000,
        840000,
        12000000,
        87600000,
        120000000,
        520000000,
        942000000,
        1380000000,
        5720000000,
        9260000000,
        15580000000,
        64800000000,
        97500000000,
        392000000000,
        737000000000,
        991000000000,
        1280000000000,
        6480000000000,
        9080000000000,
        19400000000000,
        54700000000000,
        88640000000000,
        99999999999999
    ]

    const fixedRate = [
        0.4,
        1,
        8,
        14,
        49,
        126,
        245,
        697,
        990,
        2400,
        6340,
        9800,
        12000,
        42000,
        89000,
        119000,
        512000,
        919000,
        2900000,
        5970000,
        9980000,
        39800000,
        51100000,
        91300000,
        390000000,
        819000000,
        9999999999,
    ];

    const upgRate = 1.15;


    const ls_0 = () => Number(window.localStorage.getItem('pr0')) || statePrices1[0];
    const ls_1 = () => Number(window.localStorage.getItem('pr1')) || statePrices1[1];
    const ls_2 = () => Number(window.localStorage.getItem('pr2')) || statePrices1[2];
    const ls_3 = () => Number(window.localStorage.getItem('pr3')) || statePrices1[3];
    const ls_4 = () => Number(window.localStorage.getItem('pr4')) || statePrices1[4];
    const ls_5 = () => Number(window.localStorage.getItem('pr5')) || statePrices1[5];
    const ls_6 = () => Number(window.localStorage.getItem('pr6')) || statePrices1[6];
    const ls_7 = () => Number(window.localStorage.getItem('pr7')) || statePrices1[7];
    const ls_8 = () => Number(window.localStorage.getItem('pr8')) || statePrices1[8];
    const ls_9 = () => Number(window.localStorage.getItem('pr9')) || statePrices1[9];
    const ls_10 = () => Number(window.localStorage.getItem('pr10')) || statePrices1[10];
    const ls_11 = () => Number(window.localStorage.getItem('pr11')) || statePrices1[11];
    const ls_12 = () => Number(window.localStorage.getItem('pr12')) || statePrices1[12];
    const ls_13 = () => Number(window.localStorage.getItem('pr13')) || statePrices1[13];
    const ls_14 = () => Number(window.localStorage.getItem('pr14')) || statePrices1[14];
    const ls_15 = () => Number(window.localStorage.getItem('pr15')) || statePrices1[15];
    const ls_16 = () => Number(window.localStorage.getItem('pr16')) || statePrices1[16];
    const ls_17 = () => Number(window.localStorage.getItem('pr17')) || statePrices1[17];
    const ls_18 = () => Number(window.localStorage.getItem('pr18')) || statePrices1[18];
    const ls_19 = () => Number(window.localStorage.getItem('pr19')) || statePrices1[19];
    const ls_20 = () => Number(window.localStorage.getItem('pr20')) || statePrices1[20];
    const ls_21 = () => Number(window.localStorage.getItem('pr21')) || statePrices1[21];
    const ls_22 = () => Number(window.localStorage.getItem('pr22')) || statePrices1[22];
    const ls_23 = () => Number(window.localStorage.getItem('pr23')) || statePrices1[23];
    const ls_24 = () => Number(window.localStorage.getItem('pr24')) || statePrices1[24];
    const ls_25 = () => Number(window.localStorage.getItem('pr25')) || statePrices1[25];
    const ls_26 = () => Number(window.localStorage.getItem('pr26')) || statePrices1[26];





    let [baseIncrease1] = useState(3.50); //the rate for product 1

    let [PriceIncr1, setIncr] = useState(initialStatePriceIncr1);


    //use state for price for each place 
    let [pr0, setP0] = useState(ls_0);
    let [pr1, setP1] = useState(ls_1);
    let [pr2, setP2] = useState(ls_2);
    let [pr3, setP3] = useState(ls_3);
    let [pr4, setP4] = useState(ls_4);
    let [pr5, setP5] = useState(ls_5);
    let [pr6, setP6] = useState(ls_6);
    let [pr7, setP7] = useState(ls_7);
    let [pr8, setP8] = useState(ls_8);
    let [pr9, setP9] = useState(ls_9);
    let [pr10, setP10] = useState(ls_10);
    let [pr11, setP11] = useState(ls_11);
    let [pr12, setP12] = useState(ls_12);
    let [pr13, setP13] = useState(ls_13);
    let [pr14, setP14] = useState(ls_14);
    let [pr15, setP15] = useState(ls_15);
    let [pr16, setP16] = useState(ls_16);
    let [pr17, setP17] = useState(ls_17);
    let [pr18, setP18] = useState(ls_18);
    let [pr19, setP19] = useState(ls_19);
    let [pr20, setP20] = useState(ls_20);
    let [pr21, setP21] = useState(ls_21);
    let [pr22, setP22] = useState(ls_22);
    let [pr23, setP23] = useState(ls_23);
    let [pr24, setP24] = useState(ls_24);
    let [pr25, setP25] = useState(ls_25);
    let [pr26, setP26] = useState(ls_26);

    const [def_mult_0, setMult0] = useState(Mult_0);
    const [def_mult_1, setMult1] = useState(Mult_1);
    const [def_mult_2, setMult2] = useState(Mult_2);
    const [def_mult_3, setMult3] = useState(Mult_3);
    const [def_mult_4, setMult4] = useState(Mult_4);
    const [def_mult_5, setMult5] = useState(Mult_5);
    const [def_mult_6, setMult6] = useState(Mult_6);
    const [def_mult_7, setMult7] = useState(Mult_7);
    const [def_mult_8, setMult8] = useState(Mult_8);
    const [def_mult_9, setMult9] = useState(Mult_9);
    const [def_mult_10, setMult10] = useState(Mult_10);
    const [def_mult_11, setMult11] = useState(Mult_11);
    const [def_mult_12, setMult12] = useState(Mult_12);
    const [def_mult_13, setMult13] = useState(Mult_13);
    const [def_mult_14, setMult14] = useState(Mult_14);
    const [def_mult_15, setMult15] = useState(Mult_15);
    const [def_mult_16, setMult16] = useState(Mult_16);
    const [def_mult_17, setMult17] = useState(Mult_17);
    const [def_mult_18, setMult18] = useState(Mult_18);
    const [def_mult_19, setMult19] = useState(Mult_19);
    const [def_mult_20, setMult20] = useState(Mult_20);
    const [def_mult_21, setMult21] = useState(Mult_21);
    const [def_mult_22, setMult22] = useState(Mult_22);
    const [def_mult_23, setMult23] = useState(Mult_23);
    const [def_mult_24, setMult24] = useState(Mult_24);
    const [def_mult_25, setMult25] = useState(Mult_25);
    const [def_mult_26, setMult26] = useState(Mult_26);





    useEffect(() => {

        window.localStorage.setItem('prod_1', baseIncrease1);
        window.localStorage.setItem('PriceIncr1', Math.round(PriceIncr1 * 100) / 100);



        window.localStorage.setItem('pr0', Math.round(pr0 * 100) / 100);
        window.localStorage.setItem('pr1', Math.round(pr1 * 100) / 100);
        window.localStorage.setItem('pr2', Math.round(pr2 * 100) / 100);
        window.localStorage.setItem('pr3', Math.round(pr3 * 100) / 100);
        window.localStorage.setItem('pr4', Math.round(pr4 * 100) / 100);
        window.localStorage.setItem('pr5', Math.round(pr5 * 100) / 100);
        window.localStorage.setItem('pr6', Math.round(pr6 * 100) / 100);
        window.localStorage.setItem('pr7', Math.round(pr7 * 100) / 100);
        window.localStorage.setItem('pr8', Math.round(pr8 * 100) / 100);
        window.localStorage.setItem('pr9', Math.round(pr9 * 100) / 100);
        window.localStorage.setItem('pr10', Math.round(pr10 * 100) / 100);
        window.localStorage.setItem('pr11', Math.round(pr11 * 100) / 100);
        window.localStorage.setItem('pr12', Math.round(pr12 * 100) / 100);
        window.localStorage.setItem('pr13', Math.round(pr13 * 100) / 100);
        window.localStorage.setItem('pr14', Math.round(pr14 * 100) / 100);
        window.localStorage.setItem('pr15', Math.round(pr15 * 100) / 100);
        window.localStorage.setItem('pr16', Math.round(pr16 * 100) / 100);
        window.localStorage.setItem('pr17', Math.round(pr17 * 100) / 100);
        window.localStorage.setItem('pr18', Math.round(pr18 * 100) / 100);
        window.localStorage.setItem('pr19', Math.round(pr19 * 100) / 100);
        window.localStorage.setItem('pr20', Math.round(pr20 * 100) / 100);
        window.localStorage.setItem('pr21', Math.round(pr21 * 100) / 100);
        window.localStorage.setItem('pr22', Math.round(pr22 * 100) / 100);
        window.localStorage.setItem('pr23', Math.round(pr23 * 100) / 100);
        window.localStorage.setItem('pr24', Math.round(pr24 * 100) / 100);
        window.localStorage.setItem('pr25', Math.round(pr25 * 100) / 100);
        window.localStorage.setItem('pr26', Math.round(pr26 * 100) / 100);



        window.localStorage.setItem('mult0', Math.round(def_mult_0 * 100) / 100);
        window.localStorage.setItem('mult1', Math.round(def_mult_1 * 100) / 100);
        window.localStorage.setItem('mult2', Math.round(def_mult_2 * 100) / 100);
        window.localStorage.setItem('mult3', Math.round(def_mult_3 * 100) / 100);
        window.localStorage.setItem('mult4', Math.round(def_mult_4 * 100) / 100);
        window.localStorage.setItem('mult5', Math.round(def_mult_5 * 100) / 100);
        window.localStorage.setItem('mult6', Math.round(def_mult_6 * 100) / 100);
        window.localStorage.setItem('mult7', Math.round(def_mult_7 * 100) / 100);
        window.localStorage.setItem('mult8', Math.round(def_mult_8 * 100) / 100);
        window.localStorage.setItem('mult9', Math.round(def_mult_9 * 100) / 100);
        window.localStorage.setItem('mult10', Math.round(def_mult_10 * 100) / 100);
        window.localStorage.setItem('mult11', Math.round(def_mult_11 * 100) / 100);
        window.localStorage.setItem('mult12', Math.round(def_mult_12 * 100) / 100);
        window.localStorage.setItem('mult13', Math.round(def_mult_13 * 100) / 100);
        window.localStorage.setItem('mult14', Math.round(def_mult_14 * 100) / 100);
        window.localStorage.setItem('mult15', Math.round(def_mult_15 * 100) / 100);
        window.localStorage.setItem('mult16', Math.round(def_mult_16 * 100) / 100);
        window.localStorage.setItem('mult17', Math.round(def_mult_17 * 100) / 100);
        window.localStorage.setItem('mult18', Math.round(def_mult_18 * 100) / 100);
        window.localStorage.setItem('mult19', Math.round(def_mult_19 * 100) / 100);
        window.localStorage.setItem('mult20', Math.round(def_mult_20 * 100) / 100);
        window.localStorage.setItem('mult21', Math.round(def_mult_21 * 100) / 100);
        window.localStorage.setItem('mult22', Math.round(def_mult_22 * 100) / 100);
        window.localStorage.setItem('mult23', Math.round(def_mult_23 * 100) / 100);
        window.localStorage.setItem('mult24', Math.round(def_mult_24 * 100) / 100);
        window.localStorage.setItem('mult25', Math.round(def_mult_25 * 100) / 100);
        window.localStorage.setItem('mult26', Math.round(def_mult_26 * 100) / 100);


    }, [baseIncrease1, PriceIncr1, pr0, pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14, pr15, pr16, pr17, pr18, pr19, pr20, pr21, pr22, pr23, pr24, pr25, pr26]);

    function btnClicked() {
        let btns = document.getElementsByClassName("btn-store");
        for (let i = 0; i < btns.length; i++) {

            btns[i].addEventListener("click", () => {
                btnStates(i);

            });
        }
    }

    function btnStates(index) {
        // console.log(index);
        let actualIndex = index - 1;

        setNewPrice(actualIndex);


    }

    function setNewPrice(index) {
        // console.log("SETTING THE NEW PRICE!");
        // pr0 = 30;
        // setP0(pr0 + 30);
        // console.log(eval(`pr${index}`));

        if (counter >= eval(`pr${index}`)) {

            counter = counter - ((Number(eval(`pr${index}`)) * 100) / 100);
            ratePerSec += fixedRate[index];

            eval(`setP${index}(${((Number(eval(`pr${index}`)) * 100) / 100) * upgRate})`);
            // setMult0

            eval(`setMult${index}(${((Number(eval(`def_mult_${index}`)) * 100) / 100) + 1})`);



            setRate(ratePerSec);
            setCounter(counter);

            window.location.reload();

        } else {
            window.location.reload(200);
            alert("Insufficient cookies!");
        }
        window.location.reload(200);

        // if (counter >= PriceIncr1) {
        //     counter = counter - PriceIncr1;
        //     countAmount += 1;

        //     setIncr(PriceIncr1 * baseIncrease1);
        //     setCounter(counter);
        //     setAmount(countAmount);
        // } else {
        //     alert("Insufficient cookies!");
        // }

    }

    const prs = [pr0, pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14, pr15, pr16, pr17, pr18, pr19, pr20, pr21, pr22, pr23, pr24, pr25, pr26];

    function createStoreOptions() {

        // for(let i = 0; i < statePlaces.length; i++){
        //     console.log(statePlaces[i]);
        // }

        const ds = document.getElementById("bodyData");
        // const crtTr = document.createElement("tr");
        // const crtTd = document.createElement("td");
        // const crtBtn = document.createElement("button");

        for (let i = 0; i < statePlaces.length; i++) {
            var row = document.createElement("tr");
            var cell = document.createElement("td");
            var btnCell = document.createElement("button");
            btnCell.className = "btn-store";
            btnCell.id = `${numID++}`;
            var crtDiv = document.createElement("div");
            crtDiv.className = "btn-in";

            var cellText = document.createTextNode(`${statePlaces[i]}`);
            var crtBR = document.createElement("br");
            var crtImg = document.createElement("img");
            crtImg.src = cookie;
            crtImg.width = 20;

            var cellTextPrice = document.createTextNode(`: ${prs[i]} cookies`);
            var crtBR2 = document.createElement("br");
            var cellTextCounter = document.createTextNode(`x ${eval(`def_mult_${i}`)}`);

            crtDiv.appendChild(cellText);
            crtDiv.appendChild(crtBR);
            crtDiv.appendChild(crtImg);
            crtDiv.appendChild(cellTextPrice);
            crtDiv.appendChild(crtBR2);
            crtDiv.appendChild(cellTextCounter);
            // crtDiv.appendChild(lineSpace);
            btnCell.appendChild(crtDiv);
            cell.appendChild(btnCell);
            row.appendChild(cell);

            ds.appendChild(row);
        }
        document.body.appendChild(ds);
    }
    // createStoreOptions();


    return (
        //   <>

        <div >
            {/* <Particle/> */}
            <div className='Box2'>
                <table id='DataStore' onLoad={() => { createStoreOptions(); btnClicked(); }}>
                    {/* btnClicked(); */}
                    <thead>
                        <tr>
                            <th><div className='HeaderDescr'>Store</div></th>
                            {/* Store Option Cookie Clicker */}
                        </tr>
                    </thead>
                    <tbody id='bodyData'>
                        <tr id='demo'>
                            <td>
                                <button className='btn-store'>
                                    <div className='btn-in'>
                                        <img src={cookie} alt="cookie" width={20} />
                                    </div>
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className='box3-specials'>
                <table id='table-specials'>
                    <thead>
                        <tr>
                            <th><div className='HeaderDescr1'>Specials</div></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button className="btn-store-special" onClick={() => {


                                    if (counter >= PriceIncr1) {
                                        counter = counter - PriceIncr1;
                                        countAmount += 1;

                                        setIncr(PriceIncr1 * baseIncrease1);
                                        setCounter(counter);
                                        setAmount(countAmount);
                                    } else {
                                        alert("Insufficient cookies!");
                                    }

                                    console.log(counter);
                                    console.log(countAmount);


                                }}>
                                    <div>
                                        Cursor (+1)
                                        <br />
                                        <img src={cookie} alt="cookie" width={"20px"} />: {Math.round(PriceIncr1 * 100) / 100} cookies!

                                    </div>
                                </button>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>



        </div>
        //   </Part>
    );
}

export default TableCol;

