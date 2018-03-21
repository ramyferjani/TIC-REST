import { getConnection, getManager, Repository } from "typeorm";
import { Domain } from "../models/Domain";
import { Request, Response } from "express";

/**
 * GET all domains
 */
export let getAll = async(request: Request, response: Response) => {

  if ((request.params.ext && request.params.ext === "json")) {
    const domainRepository = getManager().getRepository(Domain);
        // load a post by a given post id
    const domains = await domainRepository.find({ select: ['id', 'slug', 'name', 'description']});
    response.json({
      code: 200,
      message: 'success',
      datas: domains,
    });
  } else {
    response.status(400).json({
      code: 400,
      message: 'error',
      datas: []
    })
  }

}

export let getByName = async(request: Request, response: Response) => {

  // if ((request.params.ext && request.params.ext === "json")) {
  //   const domainRepository = getManager().getRepository(Domain);
  //       // load a post by a given post id
  //   const domains = await domainRepository.find({ select: ['id', 'slug', 'name', 'description']});
  //   response.json({
  //     code: 200,
  //     message: 'success',
  //     datas: domains,
  //   });
  // } else {
  //   response.status(400).json({
  //     code: 400,
  //     message: 'error',
  //     datas: []
  //   })
  // }

  response.json({
        code: 200,
        message: 'success',
        datas: request.params,
      });

}

