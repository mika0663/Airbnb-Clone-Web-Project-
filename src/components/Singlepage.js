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