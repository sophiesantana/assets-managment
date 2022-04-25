"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAssetsByUnitController = exports.getAllAssetsByUnitUseCase = void 0;
const MongoGetAllAssetsByUnitRepository_1 = require("../../repositories/implementations/MongoGetAllAssetsByUnitRepository");
const getAllAssetsByUnitController_1 = require("./getAllAssetsByUnitController");
const getAllAssetsByUnitUseCase_1 = require("./getAllAssetsByUnitUseCase");
const mongoGetAllAssetsByUnitRepository = new MongoGetAllAssetsByUnitRepository_1.MongoGetAllAssetsByUnitRepository();
const getAllAssetsByUnitUseCase = new getAllAssetsByUnitUseCase_1.GetAllAssetsByUnitUseCase(mongoGetAllAssetsByUnitRepository);
exports.getAllAssetsByUnitUseCase = getAllAssetsByUnitUseCase;
const getAllAssetsByUnitController = new getAllAssetsByUnitController_1.GetAllAssetsByUnitController(getAllAssetsByUnitUseCase);
exports.getAllAssetsByUnitController = getAllAssetsByUnitController;