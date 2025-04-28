import { TrucksRepository } from "@repositories/truckRepositories";
import { TrucksService } from "@services/trucksService";
import { Request, Response } from "express";
import { ITrucksRepository, ITrucksService, ITrucks } from "types/trucksTypes";
//Inyeccion de dependencias
const trucksRepository: ITrucksRepository = new TrucksRepository();
const trucksService: ITrucksService = new TrucksService(trucksRepository);

export const findTrucks = async (req: Request, res: Response) => {
  console.log("req findTrucks => ", req.currentUser);
  try {
    const Trucks = await trucksService.findTrucks();
    if (Trucks.length === 0){
      res.status(404).json({ message: "No se encontraron camiones" });
    }

    res.json(Trucks);
  } catch (error) {
    console.log("error => ", error);
    res.status(500).json(error);
  }
};

export const findTrucksById = async (req: Request, res: Response) => {
  try {
    const Trucks = await trucksService.findTrucksById(req.params.id);
    if (!Trucks){
      res.status(404).json({ message: "Camion no encontrado" });
    }

    res.json(Trucks);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
};

export const createTrucks = async (req: Request, res: Response) => {
  try {
    const newTruck: ITrucks = req.body;
    const result = await trucksService.createTrucks(newTruck);

    res.status(201).json(result);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(400).json(error);
  }
};

export const updateTrucks = async (req: Request, res: Response) => {
  try {
    const Trucks = await trucksService.updateTrucks(req.params.id, req.body);
    if (!Trucks){
      res.status(404).json({ message: "No se actualizo el contenido" });
    } 

    res.json(Trucks);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
};

export const deleteTrucks = async (req: Request, res: Response) => {
  try {
    const Trucks = await trucksService.deleteTrucks(req.params.id);
    if (!Trucks){
      res.status(404).json({ message: "No se encontraron camiones" });
    } 

    res.json(Trucks);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
};