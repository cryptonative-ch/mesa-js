/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MesaFactoryInterface extends ethers.utils.Interface {
  functions: {
    "allSales(uint256)": FunctionFragment;
    "feeDenominator()": FunctionFragment;
    "feeManager()": FunctionFragment;
    "feeNumerator()": FunctionFragment;
    "feeTo()": FunctionFragment;
    "initialize(address,address,address,address,uint256,uint256,uint256)": FunctionFragment;
    "launchTemplate(uint256,bytes)": FunctionFragment;
    "numberOfSales()": FunctionFragment;
    "saleFee()": FunctionFragment;
    "setFeeManager(address)": FunctionFragment;
    "setFeeNumerator(uint256)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setSaleFee(uint256)": FunctionFragment;
    "setTemplateFee(uint256)": FunctionFragment;
    "setTemplateLauncher(address)": FunctionFragment;
    "setTemplateManager(address)": FunctionFragment;
    "templateFee()": FunctionFragment;
    "templateId()": FunctionFragment;
    "templateLauncher()": FunctionFragment;
    "templateManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allSales",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "launchTemplate",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfSales",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "saleFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFeeManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeNumerator",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setSaleFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplateFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplateLauncher",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTemplateManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "templateFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "templateId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "templateLauncher",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "templateManager",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allSales", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "launchTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfSales",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "saleFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSaleFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateLauncher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTemplateManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "templateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "templateId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "templateLauncher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "templateManager",
    data: BytesLike
  ): Result;

  events: {
    "FactoryInitialized(address,address,address,address,uint256,uint256,uint256)": EventFragment;
    "SetFeeManager(address)": EventFragment;
    "SetFeeNumerator(uint256)": EventFragment;
    "SetFeeTo(address)": EventFragment;
    "SetSaleFee(uint256)": EventFragment;
    "SetTemplateFee(uint256)": EventFragment;
    "SetTemplateLauncher(address)": EventFragment;
    "SetTemplateManager(address)": EventFragment;
    "TemplateLaunched(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FactoryInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeNumerator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeTo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetSaleFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTemplateFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTemplateLauncher"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTemplateManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TemplateLaunched"): EventFragment;
}

export class MesaFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MesaFactoryInterface;

  functions: {
    allSales(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "allSales(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    feeDenominator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "feeDenominator()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeManager(overrides?: CallOverrides): Promise<[string]>;

    "feeManager()"(overrides?: CallOverrides): Promise<[string]>;

    feeNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "feeNumerator()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    "feeTo()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address,address,address,address,uint256,uint256,uint256)"(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "launchTemplate(uint256,bytes)"(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numberOfSales(overrides?: CallOverrides): Promise<[BigNumber]>;

    "numberOfSales()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    saleFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    "saleFee()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFeeManager(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFeeManager(address)"(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFeeNumerator(uint256)"(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setSaleFee(uint256)"(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setTemplateFee(uint256)"(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setTemplateLauncher(address)"(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTemplateManager(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setTemplateManager(address)"(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    templateFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    "templateFee()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    templateId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "templateId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    templateLauncher(overrides?: CallOverrides): Promise<[string]>;

    "templateLauncher()"(overrides?: CallOverrides): Promise<[string]>;

    templateManager(overrides?: CallOverrides): Promise<[string]>;

    "templateManager()"(overrides?: CallOverrides): Promise<[string]>;
  };

  allSales(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "allSales(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

  "feeDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

  feeManager(overrides?: CallOverrides): Promise<string>;

  "feeManager()"(overrides?: CallOverrides): Promise<string>;

  feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  "feeNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  "feeTo()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _feeManager: string,
    _feeTo: string,
    _templateManager: string,
    _templateLauncher: string,
    _templateFee: BigNumberish,
    _feeNumerator: BigNumberish,
    _saleFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address,address,address,address,uint256,uint256,uint256)"(
    _feeManager: string,
    _feeTo: string,
    _templateManager: string,
    _templateLauncher: string,
    _templateFee: BigNumberish,
    _feeNumerator: BigNumberish,
    _saleFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  launchTemplate(
    _templateId: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "launchTemplate(uint256,bytes)"(
    _templateId: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numberOfSales(overrides?: CallOverrides): Promise<BigNumber>;

  "numberOfSales()"(overrides?: CallOverrides): Promise<BigNumber>;

  saleFee(overrides?: CallOverrides): Promise<BigNumber>;

  "saleFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  setFeeManager(
    _feeManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFeeManager(address)"(
    _feeManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeNumerator(
    _feeNumerator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFeeNumerator(uint256)"(
    _feeNumerator: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    _feeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFeeTo(address)"(
    _feeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSaleFee(
    _saleFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setSaleFee(uint256)"(
    _saleFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTemplateFee(
    _templateFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setTemplateFee(uint256)"(
    _templateFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTemplateLauncher(
    _templateLauncher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setTemplateLauncher(address)"(
    _templateLauncher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTemplateManager(
    _templateManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setTemplateManager(address)"(
    _templateManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  templateFee(overrides?: CallOverrides): Promise<BigNumber>;

  "templateFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  templateId(overrides?: CallOverrides): Promise<BigNumber>;

  "templateId()"(overrides?: CallOverrides): Promise<BigNumber>;

  templateLauncher(overrides?: CallOverrides): Promise<string>;

  "templateLauncher()"(overrides?: CallOverrides): Promise<string>;

  templateManager(overrides?: CallOverrides): Promise<string>;

  "templateManager()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    allSales(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "allSales(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "feeDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeManager(overrides?: CallOverrides): Promise<string>;

    "feeManager()"(overrides?: CallOverrides): Promise<string>;

    feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "feeNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    "feeTo()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address,address,uint256,uint256,uint256)"(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "launchTemplate(uint256,bytes)"(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    numberOfSales(overrides?: CallOverrides): Promise<BigNumber>;

    "numberOfSales()"(overrides?: CallOverrides): Promise<BigNumber>;

    saleFee(overrides?: CallOverrides): Promise<BigNumber>;

    "saleFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeManager(
      _feeManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeeManager(address)"(
      _feeManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeeNumerator(uint256)"(
      _feeNumerator: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSaleFee(uint256)"(
      _saleFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTemplateFee(uint256)"(
      _templateFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTemplateLauncher(address)"(
      _templateLauncher: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTemplateManager(
      _templateManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTemplateManager(address)"(
      _templateManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    templateFee(overrides?: CallOverrides): Promise<BigNumber>;

    "templateFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    templateId(overrides?: CallOverrides): Promise<BigNumber>;

    "templateId()"(overrides?: CallOverrides): Promise<BigNumber>;

    templateLauncher(overrides?: CallOverrides): Promise<string>;

    "templateLauncher()"(overrides?: CallOverrides): Promise<string>;

    templateManager(overrides?: CallOverrides): Promise<string>;

    "templateManager()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    FactoryInitialized(
      feeManager: null,
      feeTo: null,
      templateManager: null,
      templateLauncher: null,
      templateFee: null,
      feeNumerator: null,
      saleFee: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, BigNumber, BigNumber],
      {
        feeManager: string;
        feeTo: string;
        templateManager: string;
        templateLauncher: string;
        templateFee: BigNumber;
        feeNumerator: BigNumber;
        saleFee: BigNumber;
      }
    >;

    SetFeeManager(
      feeManager: string | null
    ): TypedEventFilter<[string], { feeManager: string }>;

    SetFeeNumerator(
      feeNumerator: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { feeNumerator: BigNumber }>;

    SetFeeTo(
      feeTo: string | null
    ): TypedEventFilter<[string], { feeTo: string }>;

    SetSaleFee(
      saleFee: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { saleFee: BigNumber }>;

    SetTemplateFee(
      templateFee: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { templateFee: BigNumber }>;

    SetTemplateLauncher(
      templateLauncher: string | null
    ): TypedEventFilter<[string], { templateLauncher: string }>;

    SetTemplateManager(
      templateManager: string | null
    ): TypedEventFilter<[string], { templateManager: string }>;

    TemplateLaunched(
      template: string | null,
      templateId: null
    ): TypedEventFilter<
      [string, BigNumber],
      { template: string; templateId: BigNumber }
    >;
  };

  estimateGas: {
    allSales(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "allSales(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    feeDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "feeDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeManager(overrides?: CallOverrides): Promise<BigNumber>;

    "feeManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "feeNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    "feeTo()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address,address,address,address,uint256,uint256,uint256)"(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "launchTemplate(uint256,bytes)"(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numberOfSales(overrides?: CallOverrides): Promise<BigNumber>;

    "numberOfSales()"(overrides?: CallOverrides): Promise<BigNumber>;

    saleFee(overrides?: CallOverrides): Promise<BigNumber>;

    "saleFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeManager(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFeeManager(address)"(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFeeNumerator(uint256)"(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setSaleFee(uint256)"(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setTemplateFee(uint256)"(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setTemplateLauncher(address)"(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTemplateManager(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setTemplateManager(address)"(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    templateFee(overrides?: CallOverrides): Promise<BigNumber>;

    "templateFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    templateId(overrides?: CallOverrides): Promise<BigNumber>;

    "templateId()"(overrides?: CallOverrides): Promise<BigNumber>;

    templateLauncher(overrides?: CallOverrides): Promise<BigNumber>;

    "templateLauncher()"(overrides?: CallOverrides): Promise<BigNumber>;

    templateManager(overrides?: CallOverrides): Promise<BigNumber>;

    "templateManager()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    allSales(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allSales(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeDenominator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeDenominator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeManager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeNumerator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeNumerator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeTo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address,address,uint256,uint256,uint256)"(
      _feeManager: string,
      _feeTo: string,
      _templateManager: string,
      _templateLauncher: string,
      _templateFee: BigNumberish,
      _feeNumerator: BigNumberish,
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    launchTemplate(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "launchTemplate(uint256,bytes)"(
      _templateId: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numberOfSales(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "numberOfSales()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    saleFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "saleFee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeManager(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeManager(address)"(
      _feeManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeNumerator(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeNumerator(uint256)"(
      _feeNumerator: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSaleFee(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setSaleFee(uint256)"(
      _saleFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateFee(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setTemplateFee(uint256)"(
      _templateFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateLauncher(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setTemplateLauncher(address)"(
      _templateLauncher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTemplateManager(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setTemplateManager(address)"(
      _templateManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    templateFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "templateFee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templateId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "templateId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    templateLauncher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "templateLauncher()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    templateManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "templateManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
