import React from 'react'
import "../styles/SearchDataPage.css"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { placesStore } from '../store/Store';
import { useState, useEffect } from 'react';
import filterbtn from "../styles/filterBtn.png"
import { MdOutlinePets } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import { TiTick } from "react-icons/ti";
import SearchPageFooter from './SearchPageFooter';