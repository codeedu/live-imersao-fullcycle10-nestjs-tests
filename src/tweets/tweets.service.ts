import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet, TweetDocument } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet.name)
    private tweetModel: Model<TweetDocument>,
  ) {}

  async create(createTweetDto: CreateTweetDto) {
    const tweetDoc = new this.tweetModel(createTweetDto);
    await tweetDoc.save();
    return tweetDoc;
  }

  findAll() {
    return this.tweetModel.find().exec();
  }

  findOne(id: string) {
    return this.tweetModel.findById(id).exec();
  }

  update(id: string, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: string) {
    return `This action removes a #${id} tweet`;
  }
}
