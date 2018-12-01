<?php

$recepient = "kostyasu5@gmail.com";
$sitename = "Автосервис №1 в Москве";

$phone = trim($_POST["tel"]);
$type = trim($_POST["type"]);
$message = "Телефон: $phone, Тип: $type";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");