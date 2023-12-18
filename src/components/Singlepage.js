import React from 'react'
import { useParams } from 'react-router-dom'
import { placesStore } from '../store/Store'
import "../styles/SinglePage.css"
import { FaAirbnb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"
import { IoMdThumbsUp } from "react-icons/io"
import { FaKey } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { RiMedal2Fill } from "react-icons/ri";
import CalendarFunc from './Calendar';
import { useState } from 'react';
import SinglePageMiddle from './SinglePageMiddle';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import { createContext } from 'react';
import "../styles/Tabs.css";

const SinglePage = () => {

    const [buttonOpen, setButtonOpen] = useState(false);
    const [buttonClose, setButtonClose] = useState(true);




    const IdContext = createContext();

    const buttonOpenHandler = (event) => {
        event.preventDefault();
        setButtonOpen(true)
        setButtonClose(false)
    }

    const buttonCloseHandler = (event) => {
        event.preventDefault();
        setButtonClose(false);
        setButtonOpen(false)

    }

    const params = useParams();
    const { id } = params;

    const placeClicked = placesStore.find((item) => item.id === id)

    const { name, homeMainPic, price, stars, carouselPic1, carouselPic2, carouselPic3, carouselPic4, carouselPic5 } = placeClicked || {}

    const [activeImg, setActiveImg] = useState(false);

    const [defaltImage, setDefaultImage] = useState(carouselPic1);


    const getImageSrcHnadler = (e) => {
        setDefaultImage(e.target.src)
        setActiveImg(true)
    }

    const setDefaultImgHnadler = () => {
        setDefaultImage(carouselPic1)
        setActiveImg(false);
    }